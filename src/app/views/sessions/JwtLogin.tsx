import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField } from '@mui/material';
import { Box, styled } from '@mui/material';
import { useUser } from '../../contexts/JWTAuthContext';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import * as Yup from 'yup';
import { useRef } from 'react';
import { routes } from 'src/app/navigations';
import { useTranslation } from 'react-i18next';

const translationsKey: string = "loginForm"

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

// inital login credentials
const initialValues = {
  username: null,
  password: null,

  // username: 'admin',
  // password: 'admin',

  remember: true
};


const JwtLogin = () => {
  const navigate = useNavigate();
  const toastRef: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en')
  const { i18n, t } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value)

    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();

    document.cookie = `lang=${e.target.value} ${expires}; path=/`
  }

  useEffect(() => {
    const lang = document.cookie.split('lang')[1].slice(1, 3)
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }, [])

  // form field validation schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(5, `${t(`${translationsKey}.passwordLengthError`)}`)
      .required(`${t(`${translationsKey}.passwordRequired`)}`),
    username: Yup.string().required(`${t(`${translationsKey}.usernameRequired`)}`)
  });

  const { login, isAuthenticated, message } = useUser();

  const handleFormSubmit = async (values: any) => {
    try {
      const response = await login(values);
      if (response === 200) {
        navigate(routes.Dashboard);
      }
    } catch (e) { }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.Dashboard);
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n, i18n.language])

  useEffect(() => {
    if (message?.length) {
      toastRef.current.show({
        severity: 'error',
        summary: 'Error',
        detail: `${t(`${translationsKey}.emptyInputs`)}`
      });
      setLoading(false);
    }
  }, [message]);


  return (
    <JWTRoot>
      <div className="bg-blue-200"></div>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/login.png" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <select
              style={{ padding: '2px', margin: '2px 10px', float: 'right', color: '#555', borderColor: '#555', outlineColor: '#777' }}
              name="lang" id="lang" value={language} onChange={(e) => changeLanguage(e)}>
              <option value="en">English</option>
              <option value="fa">Farsi</option>
              <option value="ps">Pashto</option>
            </select>
            <ContentBox sx={{ marginTop: '73px' }}>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >

                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label={t(`${translationsKey}.username`)}
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={handleChange}
                      helperText={touched.username && errors.username}
                      error={Boolean(errors.username && errors.username)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label={t(`${translationsKey}.password`)}
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      {t(`${translationsKey}.login`)}
                    </LoadingButton>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
      <Toast ref={toastRef} />
    </JWTRoot>
  );
};

export default JwtLogin;
