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
//////////////////////////////////////////////////////
//////////////  Selectivity Reprots Import  /////////
////////////////////////////////////////////////////
import Selectivity_4360 from './views/report/Selectivity_4360';
import Selectivity_4361 from './views/report/Selectivity_4361';
//////////////////////////////////////////////////////
//////////////  DPS Reprots Import  /////////////////
////////////////////////////////////////////////////
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
/////////  DataExchange Reprots Import  /////////////
////////////////////////////////////////////////////
import DataExchange_5050 from './views/report/DataExchange_5050';
import DataExchange_5051 from './views/report/DataExchange_5051';

//////////////////////////////////////////////////////
////////////  Exemption Reprots Import  //////////////
////////////////////////////////////////////////////
import Exemption_4753 from './views/report/Exemption_4753';
import Exemption_4754 from './views/report/Exemption_4754';
import Exemption_4755 from './views/report/Exemption_4755';
//////////////////////////////////////////////////////
////////////  Revenue Reprots Import  ///////////////
////////////////////////////////////////////////////
import Revenue_4151 from './views/report/Revenue_4151';
import Revenue_4155 from './views/report/Revenue_4155';
import Revenue_4165 from './views/report/Revenue_4165';
import Revenue_4171 from './views/report/Revenue_4171';
import Revenue_4171_1400 from './views/report/Revenue_4171_1400';
import Revenue_4172 from './views/report/Revenue_4172';
//////////////////////////////////////////////////////
////////////  Transit Reprots Import  ///////////////
////////////////////////////////////////////////////
import Transit_4251 from './views/report/Transit_4251';
import Transit_4252 from './views/report/Transit_4252';
import Transit_4270 from './views/report/Transit_4270';
import Transit_4272 from './views/report/Transit_4272';
import Transit_4274 from './views/report/Transit_4274';
import Transit_4282 from './views/report/Transit_4282';
import Transit_4271 from './views/report/Transit_4271';
import Transit_4283 from './views/report/Transit_4283';
import Transit_4284 from './views/report/Transit_4284';
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
            ////////////  Exemption Reprots Routes  //////////////
            ////////////////////////////////////////////////////
          }
          <Route
            path={routes.Exemption_4753}
            element={
              <PrivateRoute>
                <Exemption_4753 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Exemption_4754}
            element={
              <PrivateRoute>
                <Exemption_4754 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Exemption_4755}
            element={
              <PrivateRoute>
                <Exemption_4755 />
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
          <Route
            path={routes.Transit_4251}
            element={
              <PrivateRoute>
                <Transit_4251 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4252}
            element={
              <PrivateRoute>
                <Transit_4252 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4270}
            element={
              <PrivateRoute>
                <Transit_4270 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4271}
            element={
              <PrivateRoute>
                <Transit_4271 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4272}
            element={
              <PrivateRoute>
                <Transit_4272 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4274}
            element={
              <PrivateRoute>
                <Transit_4274 />
              </PrivateRoute>
            }
          />{' '}
          <Route
            path={routes.Transit_4282}
            element={
              <PrivateRoute>
                <Transit_4282 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4283}
            element={
              <PrivateRoute>
                <Transit_4283 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4284}
            element={
              <PrivateRoute>
                <Transit_4284 />
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
          {
            //////////////////////////////////////////////////////
            //////////   DataExchange Reprots Routes    /////////
            ////////////////////////////////////////////////////
          }
          <Route
            path={routes.DataExchange_5050}
            element={
              <PrivateRoute>
                <DataExchange_5050 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DataExchange_5051}
            element={
              <PrivateRoute>
                <DataExchange_5051 />
              </PrivateRoute>
            }
          />
          {
            //////////////////////////////////////////////////////
            //////////   Selectivity  Reprots Routes    /////////
            ////////////////////////////////////////////////////
          }
          <Route
            path={routes.Selectivity_4360}
            element={
              <PrivateRoute>
                <Selectivity_4360 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4361}
            element={
              <PrivateRoute>
                <Selectivity_4361 />
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
