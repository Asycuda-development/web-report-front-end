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
import DPS_4554 from './views/report/DPS_4554';
import DPS_4555 from './views/report/DPS_4555';
import DPS_4556 from './views/report/DPS_4556';
import DPS_4558 from './views/report/DPS_4558';
import DPS_4559 from './views/report/DPS_4559';
import DPS_4560 from './views/report/DPS_4560';
import DPS_4561 from './views/report/DPS_4561';
import DPS_4562 from './views/report/DPS_4562';
import DPS_4563 from './views/report/DPS_4563';
import DPS_4564 from './views/report/DPS_4564';
import DPS_4565 from './views/report/DPS_4565';
import DPS_4566 from './views/report/DPS_4566';
import DPS_4571 from './views/report/DPS_4571';
import DPS_4576 from './views/report/DPS_4576';
import DPS_4578 from './views/report/DPS_4578';
import DPS_4584 from './views/report/DPS_4584';
import DPS_4585 from './views/report/DPS_4585';
import DPS_4586 from './views/report/DPS_4586';
import DPS_4590 from './views/report/DPS_4590';
import DPS_4591 from './views/report/DPS_4591';
import OverallReport from './views/report/report';
import RevenueReport4153 from './views/report/RevenueReport4153';
import RevenueReport4153_1400 from './views/report/RevenueReport4153_1400';
import RevenueReport4154 from './views/report/RevenueReport4154';
import RevenueReport4157_1400 from './views/report/RevenueReport4157_1400';
import RevenueReport4158 from './views/report/RevenueReport4158';
import RevenueReport4159 from './views/report/RevenueReport4159';
import RevenueReport4160 from './views/report/RevenueReport4160';
import RevenueReport4161 from './views/report/RevenueReport4161';
import RevenueReport4162 from './views/report/RevenueReport4162';
import RevenueReport4163 from './views/report/RevenueReport4163';
import RevenueReport4164_1400 from './views/report/RevenueReport4164_1400';
import RevenueReport4173 from './views/report/RevenueReport4173';
import RevenueReport48100 from './views/report/RevenueReport48100';
import RevenueReport48101 from './views/report/RevenueReport48101';
import TransitReport4257 from './views/report/TransitReport4257';
import TransitReport4258 from './views/report/TransitReport4258';
import TransitReport4259 from './views/report/TransitReport4259';
import TransitReport4265 from './views/report/TransitReport4265';
import TransitReport4266 from './views/report/TransitReport4266';
import TransitReport4267 from './views/report/TransitReport4267';
import TransitReport4268 from './views/report/TransitReport4268';
import TransitReport4275 from './views/report/TransitReport4275';
import TransitReport4276 from './views/report/TransitReport4276';
import TransitReport4277 from './views/report/TransitReport4277';
import TransitReport4278 from './views/report/TransitReport4278';
import TransitReport4279 from './views/report/TransitReport4279';
import TransitReport4280 from './views/report/TransitReport4280';
import TransitReport4281 from './views/report/TransitReport4281';
import ValuationReport4652 from './views/report/ValuationReport4652';
import ValuationReport4653 from './views/report/ValuationReport4653';
import ValuationReport4654 from './views/report/ValuationReport4654';
import ValuationReport4656 from './views/report/ValuationReport4656';
import ValuationReport4657 from './views/report/ValuationReport4657';
import ValuationReport4650 from './views/report/ValuationReport4650';
import ValuationReport4658 from './views/report/ValuationReport4658';
import ExemptionReport4750 from './views/report/ExemptionReport4750';
import ExemptionReport4752 from './views/report/ExemptionReport4752';
import SelectivityReport4350 from './views/report/SelectivityReport4350';
import SelectivityReport4351 from './views/report/SelectivityReport4351';
import SelectivityReport4352 from './views/report/SelectivityReport4352';
import SelectivityReport4353 from './views/report/SelectivityReport4353';
import SelectivityReport4354 from './views/report/SelectivityReport4354';
import SelectivityReport4355 from './views/report/SelectivityReport4355';
import SelectivityReport4356 from './views/report/SelectivityReport4356';


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
            path={routes.RevenueReport4157_1400}
            element={
              <PrivateRoute>
                <RevenueReport4157_1400 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4158}
            element={
              <PrivateRoute>
                <RevenueReport4158 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4159}
            element={
              <PrivateRoute>
                <RevenueReport4159 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4153_1400}
            element={
              <PrivateRoute>
                <RevenueReport4153_1400 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4153}
            element={
              <PrivateRoute>
                <RevenueReport4153 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4154}
            element={
              <PrivateRoute>
                <RevenueReport4154 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4160}
            element={
              <PrivateRoute>
                <RevenueReport4160 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4163}
            element={
              <PrivateRoute>
                <RevenueReport4163 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4164_1400}
            element={
              <PrivateRoute>
                <RevenueReport4164_1400 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4161}
            element={
              <PrivateRoute>
                <RevenueReport4161 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4162}
            element={
              <PrivateRoute>
                <RevenueReport4162 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport4173}
            element={
              <PrivateRoute>
                <RevenueReport4173 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport48101}
            element={
              <PrivateRoute>
                <RevenueReport48101 />
              </PrivateRoute>
            }
          />
            <Route
            path={routes.RevenueReport48100}
            element={
              <PrivateRoute>
                <RevenueReport48100 />
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
            path={routes.TransitReport4257}
            element={
              <PrivateRoute>
                <TransitReport4257 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4258}
            element={
              <PrivateRoute>
                <TransitReport4258 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4259}
            element={
              <PrivateRoute>
                <TransitReport4259 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4265}
            element={
              <PrivateRoute>
                <TransitReport4265 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4266}
            element={
              <PrivateRoute>
                <TransitReport4266 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4267}
            element={
              <PrivateRoute>
                <TransitReport4267 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4268}
            element={
              <PrivateRoute>
                <TransitReport4268 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4275}
            element={
              <PrivateRoute>
                <TransitReport4275 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4276}
            element={
              <PrivateRoute>
                <TransitReport4276 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4277}
            element={
              <PrivateRoute>
                <TransitReport4277 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4278}
            element={
              <PrivateRoute>
                <TransitReport4278 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4279}
            element={
              <PrivateRoute>
                <TransitReport4279 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4280}
            element={
              <PrivateRoute>
                <TransitReport4280 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.TransitReport4281}
            element={
              <PrivateRoute>
                <TransitReport4281 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4652}
            element={
              <PrivateRoute>
                <ValuationReport4652 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4653}
            element={
              <PrivateRoute>
                <ValuationReport4653 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4654}
            element={
              <PrivateRoute>
                <ValuationReport4654 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4656}
            element={
              <PrivateRoute>
                <ValuationReport4656 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4657}
            element={
              <PrivateRoute>
                <ValuationReport4657 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4650}
            element={
              <PrivateRoute>
                <ValuationReport4650 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ValuationReport4658}
            element={
              <PrivateRoute>
                <ValuationReport4658 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ExemptionReport4750}
            element={
              <PrivateRoute>
                <ExemptionReport4750 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.ExemptionReport4752}
            element={
              <PrivateRoute>
                <ExemptionReport4752 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.SelectivityReport4350}
            element={
              <PrivateRoute>
                <SelectivityReport4350 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.SelectivityReport4351}
            element={
              <PrivateRoute>
                <SelectivityReport4351 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.SelectivityReport4352}
            element={
              <PrivateRoute>
                <SelectivityReport4352 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.SelectivityReport4353}
            element={
              <PrivateRoute>
                <SelectivityReport4353 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.SelectivityReport4354}
            element={
              <PrivateRoute>
                <SelectivityReport4354 />
              </PrivateRoute>
            }
          />
           <Route
            path={routes.SelectivityReport4355}
            element={
              <PrivateRoute>
                <SelectivityReport4355 />
              </PrivateRoute>
            }
          />
              <Route
            path={routes.SelectivityReport4356}
            element={
              <PrivateRoute>
                <SelectivityReport4356 />
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
            path={routes.DPS_4559}
            element={
              <PrivateRoute>
                <DPS_4559 />
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
            path={routes.DPS_4563}
            element={
              <PrivateRoute>
                <DPS_4563 />
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
            path={routes.DPS_4576}
            element={
              <PrivateRoute>
                <DPS_4576 />
              </PrivateRoute>
            }
          />
               <Route
            path={routes.DPS_4585}
            element={
              <PrivateRoute>
                <DPS_4585 />
              </PrivateRoute>
            }
          />
               <Route
            path={routes.DPS_4586}
            element={
              <PrivateRoute>
                <DPS_4586 />
              </PrivateRoute>
            }
          />
               <Route
            path={routes.DPS_4590}
            element={
              <PrivateRoute>
                <DPS_4590 />
              </PrivateRoute>
            }
          />
             <Route
            path={routes.DPS_4591}
            element={
              <PrivateRoute>
                <DPS_4591 />
              </PrivateRoute>
            }
          />
               <Route
            path={routes.DPS_4584}
            element={
              <PrivateRoute>
                <DPS_4584 />
              </PrivateRoute>
            }
          />
             <Route
            path={routes.DPS_4578}
            element={
              <PrivateRoute>
                <DPS_4578 />
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
