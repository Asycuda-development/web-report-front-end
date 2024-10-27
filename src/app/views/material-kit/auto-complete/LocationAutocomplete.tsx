import { useMemo, useEffect, useState, useRef } from 'react';
import { Autocomplete, Grid, TextField, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

function loadScript(src: any, position: any, id: any) {
  if (!position) return;

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}
const autocompleteService: any = { current: null };

export default function LocationAutocomplete() {
  const theme = useTheme();
  const loaded: any = useRef(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places',
        document.querySelector('head'),
        'google-maps'
      );
    }

    loaded.current = true;
  }

  const handleChange = (event: any) => setInputValue(event.target.value);

  const fetch = useMemo(
    () =>
      throttle((input, callback) => {
        autocompleteService.current.getPlacePredictions(input, callback);
      }, 200),
    []
  );

  useEffect(() => {
    // let active = true;
    // if (!autocompleteService.current && window.google as any) {
    //   autocompleteService.current = new window.google.maps.places.AutocompleteService();
    // }
    // if (!autocompleteService.current) return undefined;
    // if (inputValue === '') {
    //   setOptions([]);
    //   return undefined;
    // }
    // fetch({ input: inputValue }, (results:any) => {
    //   if (active) {
    //     setOptions(results || []);
    //   }
    // });
    // return () => {
    //   active = false;
    // };
  }, [inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      style={{ width: 300 }}
      getOptionLabel={(option: any) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      freeSolo
      // disableOpenOnFocus
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add a location"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      )}
      renderOption={(option: any) => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length])
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon sx={{ color: 'text.secondary', marginRight: theme.spacing(2) }} />
            </Grid>

            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
