import { CssBaseline } from '@mui/material';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './auth/private-routes';
import { MatxTheme } from './components';
import { Condition } from './components/base-component';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import Loading from './components/MatxLoading';
import setupAxiosInterceptors from './config/axios-interceptor';
import { useUser } from './contexts/JWTAuthContext';
import { routes } from './navigations';
import DPS_4550 from './views/report/DPS_4550';
import DPS_4551 from './views/report/DPS_4551';
import OverallReport from './views/report/report';
import DPS_4556 from './views/report/DPS_4556';
import DPS_4554 from './views/report/DPS_4554';
import DPS_4555 from './views/report/DPS_4555';
import DPS_4558 from './views/report/DPS_4558';
import DPS_4561 from './views/report/DPS_4561';
import DPS_4564 from './views/report/DPS_4564';
import DPS_4571 from './views/report/DPS_4571';
import DPS_4565 from './views/report/DPS_4565';
import DPS_4566 from './views/report/DPS_4566';
import DPS_4562 from './views/report/DPS_4562';
import DPS_4560 from './views/report/DPS_4560';


const ListRoles = Loadable(lazy(() => import('./views/users/listRoles')));
const UsersList = Loadable(lazy(() => import('./views/users/ListUsers')));
const NotFound = Loadable(lazy(() => import('./views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('./views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('../app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('./views/sessions/ForgotPassword')));

const Revenue4150 = Loadable(lazy(() => import('./views/report/revenue4150')));

const Transit_4250 = Loadable(lazy(() => import('./views/report/transit_4250')));

const Analytics = Loadable(lazy(() => import('./views/dashboard/Analytics')));

const App = () => {
  const [loading, setLoading] = useState(true);
  const { currentLoggedUser, reset } = useUser();

  useEffect(() => {
    setupAxiosInterceptors(async () => {
      await reset();
    });
  }, []);
  useEffect(() => {
    currentLoggedUser().finally(() => {
      setLoading(false);
    });
  }, []);
  return (
    <PrimeReactProvider>
      <MatxTheme>
        <CssBaseline />
        <Condition condition={!loading} conditionNotTrue={<Loading />}>
          <Routes>
            <Route path={routes.base} element={<PrivateRoute />}>
              <Route path={routes.all} element={<AuthLayout />} />
            </Route>
            <Route path={routes.session.base} element={<AuthenticationLayout />} />
            <Route path={routes.all} element={<NotFound />} />
          </Routes>
        </Condition>
      </MatxTheme>
    </PrimeReactProvider>
  );
};

export default App;

const AuthLayout = () => {
  return (
    <>
      <MatxLayout>
        <Routes>
          <Route
            path={routes.Dashboard}
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Users}
            element={
              <PrivateRoute>
                <UsersList />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Report}
            element={
              <PrivateRoute>
                <OverallReport />
              </PrivateRoute>
            }
          />

          <Route
            path={routes.revenue4150}
            element={
              <PrivateRoute>
                <Revenue4150 />
              </PrivateRoute>
            }
          />

          <Route
            path={routes.transit_4250}
            element={
              <PrivateRoute>
                <Transit_4250 />
              </PrivateRoute>
            }
          />

          <Route
            path={routes.DPS_4550}
            element={
              <PrivateRoute>
                <DPS_4550 />
              </PrivateRoute>
            }
          />
             <Route
            path={routes.DPS_4551}
            element={
              <PrivateRoute>
                <DPS_4551 />
              </PrivateRoute>
            }
          />

           <Route
            path={routes.DPS_4556}
            element={
              <PrivateRoute>
                <DPS_4556 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.DPS_4554}
            element={
              <PrivateRoute>
                <DPS_4554 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.DPS_4555}
            element={
              <PrivateRoute>
                <DPS_4555 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.DPS_4558}
            element={
              <PrivateRoute>
                <DPS_4558 />
              </PrivateRoute>
            }
          />
              <Route
            path={routes.DPS_4560}
            element={
              <PrivateRoute>
                <DPS_4560 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.DPS_4561}
            element={
              <PrivateRoute>
                <DPS_4561 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.DPS_4562}
            element={
              <PrivateRoute>
                <DPS_4562 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.DPS_4564}
            element={
              <PrivateRoute>
                <DPS_4564 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.DPS_4565}
            element={
              <PrivateRoute>
                <DPS_4565 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.DPS_4566}
            element={
              <PrivateRoute>
                <DPS_4566 />
              </PrivateRoute>
            }
          />
             <Route
            path={routes.DPS_4571}
            element={
              <PrivateRoute>
                <DPS_4571 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Roles}
            element={
              <PrivateRoute>
                <ListRoles />
              </PrivateRoute>
            }
          />
          

          <Route path={routes.all} element={<Navigate to={routes.Dashboard} />} />
        </Routes>
      </MatxLayout>
    </>
  );
};

const AuthenticationLayout = () => {
  console.log('AuthenticationLayout');
  return (
    <Routes>
      <Route path={routes[404]} element={<NotFound />} />
      <Route path={routes.signin} element={<JwtLogin />} />
      <Route path={routes.signup} element={<JwtRegister />} />
      <Route path={routes.forgotPassword} element={<ForgotPassword />} />
      <Route path={routes.all} element={<Navigate to={routes.signin} />} />
    </Routes>
  );
};
