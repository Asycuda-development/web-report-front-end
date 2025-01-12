import { CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MatxTheme } from './components';
import { PrivateRoute } from './auth/private-routes';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { lazy, useEffect, useState } from 'react';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import OverallReport from './views/report/report';
import { useUser } from './contexts/JWTAuthContext';
import setupAxiosInterceptors from './config/axios-interceptor';
import { Condition } from './components/base-component';
import Loading from './components/MatxLoading';
import { routes } from './navigations';
import DPS_4550 from './views/report/DPS_4550';
import DPS_4551 from './views/report/DPS_4551';
import DPS_4557 from './views/report/DPS_4557';
import DPS_4553 from './views/report/DPS_4553';
import DPS_4573 from './views/report/DPS_4573';
import DPS_4572 from './views/report/DPS_4572';
import DPS_4575 from './views/report/DPS_4575';
import DPS_4580 from './views/report/DPS_4580';
import DPS_4587 from './views/report/DPS_4587';
import DPS_4588 from './views/report/DPS_4588';
import DPS_4589 from './views/report/DPS_4589';
import DPS_4593 from './views/report/DPS_4593';
import DPS_4595 from './views/report/DPS_4595';
import DPS_4596 from './views/report/DPS_4596';
import DPS_4599 from './views/report/DPS-4599';
//////////////////////////////////////////////////////
////////////  Revenue Reprots Import  ///////////////
////////////////////////////////////////////////////
import Revenue_4151 from './views/report/Revenue_4151';
import Revenue_4155 from './views/report/Revenue_4155';
import Revenue_4165 from './views/report/Revenue_4165';
import Revenue_4171 from './views/report/Revenue_4171';
import Revenue_4171_1400 from './views/report/Revenue_4171_1400';
import Revenue_4172 from './views/report/Revenue_4172';
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
          {
            //////////////////////////////////////////////////////
            ////////////  Dashboard Reprots Routes  /////////////
            ////////////////////////////////////////////////////
          }
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
          {
            //////////////////////////////////////////////////////
            ////////////  Revenue Reprots Routes  ///////////////
            ////////////////////////////////////////////////////
          }
          <Route
            path={routes.revenue4150}
            element={
              <PrivateRoute>
                <Revenue4150 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.revenue4151}
            element={
              <PrivateRoute>
                <Revenue_4151 />
              </PrivateRoute>
            }
          />

          <Route
            path={routes.revenue4155}
            element={
              <PrivateRoute>
                <Revenue_4155 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.revenue4165}
            element={
              <PrivateRoute>
                <Revenue_4165 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.revenue4171}
            element={
              <PrivateRoute>
                <Revenue_4171 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.revenue4171_1400}
            element={
              <PrivateRoute>
                <Revenue_4171_1400 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.revenue4172}
            element={
              <PrivateRoute>
                <Revenue_4172 />
              </PrivateRoute>
            }
          />
          {
            //////////////////////////////////////////////////////
            ////////////  Transit Reprots Routes  ///////////////
            ////////////////////////////////////////////////////
          }
          <Route
            path={routes.transit_4250}
            element={
              <PrivateRoute>
                <Transit_4250 />
              </PrivateRoute>
            }
          />
          {
            //////////////////////////////////////////////////////
            ////////////    DPS Reprots Routes    ///////////////
            ////////////////////////////////////////////////////
          }
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
            path={routes.DPS_4557}
            element={
              <PrivateRoute>
                <DPS_4557 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4553}
            element={
              <PrivateRoute>
                <DPS_4553 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4572}
            element={
              <PrivateRoute>
                <DPS_4572 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4573}
            element={
              <PrivateRoute>
                <DPS_4573 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4575}
            element={
              <PrivateRoute>
                <DPS_4575 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4580}
            element={
              <PrivateRoute>
                <DPS_4580 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4587}
            element={
              <PrivateRoute>
                <DPS_4587 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4588}
            element={
              <PrivateRoute>
                <DPS_4588 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4589}
            element={
              <PrivateRoute>
                <DPS_4589 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4593}
            element={
              <PrivateRoute>
                <DPS_4593 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4595}
            element={
              <PrivateRoute>
                <DPS_4595 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4596}
            element={
              <PrivateRoute>
                <DPS_4596 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_4599}
            element={
              <PrivateRoute>
                <DPS_4599 />
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
