import { Button, Box, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useUser } from '../../contexts/JWTAuthContext';
import { toast } from 'react-toastify';
import {
  SUCCESS_CREATE_MESSAGE,
  SUCCESS_UPDATE_MESSAGE,
  ERROR_UPDATE_MESSAGE
} from '../..//utils/constant';
import { LoadingButton } from '@mui/lab';
import { Autocomplete } from '@mui/material';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { PickList } from 'primereact/picklist';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
};

const columnStyle = {
  flex: 1,
  width: '26.5vw',
  marginRight: '1vw'
};

const TextField = styled(TextValidator)(() => ({
  // flex: 1,
  // flexGrow: 1,
  width: '100%',
  marginBottom: '16px'
}));

// const AutoComplete = styled(Autocomplete)(() => ({
//   width: 300,
//   marginBottom: '16px'
// }));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

// const systemUserRoles = [{ label: 'ROLE_ADMIN' }, { label: 'ROLE_USER' }];
interface UpdateRoleInterface {
  role?: {
    id?: number;
    name: string;
    description?: string;
    permissions?: Array<any>;
  };
  closeDialog: () => void;
  reload: () => void;
}
export const UpdateRole = (props: UpdateRoleInterface) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [loadCorrectRoles, setLoadCorectRoles] = useState(false);

  const [listoperms, setlistoperms] = useState([]);
  const [listofSelectedperms, setlistofSelectedperms] = useState<Array<any>>([]);

  useEffect(() => {
    const init = async () => {
      const { data: rls } = await axios.get('/permissions');
      setlistoperms(rls);
    };
    init();
  }, []);

  // useEffect(() => {
  //   if (props.role.id) {
  //     setName(props.role.name);
  //     setDescription(props.role.description);
  //     if (Array.isArray(props.role?.permissions) && props.role?.permissions.length > 0) {
  //       props.role?.permissions.map((r: any) =>
  //         setlistofSelectedperms(((c: any) => [...c, r.id]) as any)
  //       );
  //     }
  //   }
  // }, [props.role?.id]);

  const handleSubmit = async (event: any) => {
    try {
      setLoading(true);
      if (!props.role) {
        await axios.post('/roles', {
          name,
          description,
          permissions: listofSelectedperms
        });
        toast.success(SUCCESS_CREATE_MESSAGE);
      } else {
        await axios.put('/roles/' + props.role.id, {
          id: props.role.id,
          name,
          description,
          permissions: listofSelectedperms
        });
        toast.success(SUCCESS_UPDATE_MESSAGE);
      }
      props.reload();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.success(ERROR_UPDATE_MESSAGE);
    }
  };

  useEffect(() => {
    if (props.role) {
      setName(props.role.name);
      setDescription(props.role.description);
      if (
        props?.role?.permissions &&
        Array.isArray(props?.role.permissions) &&
        props?.role?.permissions.length > 0
      ) {
        setlistofSelectedperms(props?.role?.permissions);
      } else {
        setlistofSelectedperms([]);
      }
    }
  }, [props?.role?.id]);

  return (
    <div>
      <ContentBox>
        <h3>Role</h3>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div style={containerStyle}>
              <div style={columnStyle}>
                <TextField
                  value={name}
                  fullWidth
                  size="small"
                  type="text"
                  name="name"
                  label="Name"
                  variant="outlined"
                  defaultValue={props.role?.name || ''}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  sx={{ mb: 3 }}
                />
              </div>
              <div style={columnStyle}>
                <TextField
                  value={description}
                  fullWidth
                  size="small"
                  type="text"
                  name="description"
                  label="Description"
                  variant="outlined"
                  defaultValue={props.role?.description || ''}
                  onChange={(e: any) => {
                    setDescription(e.target.value);
                  }}
                  sx={{ mb: 3 }}
                />
              </div>
            </div>
            <br />
          </div>

          {!loadCorrectRoles && (
            <PickList
              dataKey="id"
              source={listoperms.filter(
                (r: any) => !listofSelectedperms.map((x: any) => x.id).includes(r.id)
              )}
              target={listofSelectedperms}
              onChange={(event) => {
                setlistoperms(event.source);
                setlistofSelectedperms(event.target);
              }}
              itemTemplate={(item) => item.action}
              sourceHeader="Available"
              targetHeader="Selected"
            />
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div className="left-btn" style={{ marginTop: 2 }}>
              <StyledButton
                // ref={clsRef}
                variant="contained"
                color="inherit"
                onClick={() => props.closeDialog()}
              >
                Close
              </StyledButton>
            </div>
            <div className="right-btn">
              <LoadingButton
                type="submit"
                color="primary"
                loading={loading}
                variant="contained"
                sx={{ my: 2 }}
              >
                Submit
              </LoadingButton>
            </div>
          </div>
        </ValidatorForm>
      </ContentBox>
    </div>
  );
};

export default UpdateRole;
