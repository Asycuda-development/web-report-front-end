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
import Manifest_4450 from './views/report/Manifest_4450';
import Exemption_4750 from './views/report/Exemption_4750';
import Exemption_4752 from './views/report/Exemption_4752';
import Exemption_4753 from './views/report/Exemption_4753';
import Exemption_4754 from './views/report/Exemption_4754';
import Exemption_4755 from './views/report/Exemption_4755';
import DataExchange_5050 from './views/report/DataExchange_5050';
import DataExchange_5051 from './views/report/DataExchange_5051';
import DataExchange_5053 from './views/report/DataExchange_5053';
import DataExchange_5054 from './views/report/DataExchange_5054';
import DPS_4550 from './views/report/DPS_4550';
import DPS_4551 from './views/report/DPS_4551';
import DPS_4552 from './views/report/DPS_4552';
import DPS_4553 from './views/report/DPS_4553';
import DPS_4554 from './views/report/DPS_4554';
import DPS_4555 from './views/report/DPS_4555';
import DPS_4556 from './views/report/DPS_4556';
import DPS_4557 from './views/report/DPS_4557';
import DPS_4558 from './views/report/DPS_4558';
import DPS_4559 from './views/report/DPS_4559';
import DPS_4560 from './views/report/DPS_4560';
import DPS_4561 from './views/report/DPS_4561';
import DPS_4562 from './views/report/DPS_4562';
import DPS_4563 from './views/report/DPS_4563';
import DPS_4564 from './views/report/DPS_4564';
import DPS_4565 from './views/report/DPS_4565';
import DPS_4566 from './views/report/DPS_4566';
import DPS_4570 from './views/report/DPS_4570';
import DPS_4571 from './views/report/DPS_4571';
import DPS_4572 from './views/report/DPS_4572';
import DPS_4573 from './views/report/DPS_4573';
import DPS_4575 from './views/report/DPS_4575';
import DPS_4576 from './views/report/DPS_4576';
import DPS_4578 from './views/report/DPS_4578';
import DPS_4579 from './views/report/DPS_4579';
import DPS_4580 from './views/report/DPS_4580';
import DPS_4583 from './views/report/DPS_4583';
import DPS_4584 from './views/report/DPS_4584';
import DPS_4585 from './views/report/DPS_4585';
import DPS_4586 from './views/report/DPS_4586';
import DPS_4587 from './views/report/DPS_4587';
import DPS_4588 from './views/report/DPS_4588';
import DPS_4589 from './views/report/DPS_4589';
import DPS_4590 from './views/report/DPS_4590';
import DPS_4591 from './views/report/DPS_4591';
import DPS_4593 from './views/report/DPS_4593';
import DPS_4595 from './views/report/DPS_4595';
import DPS_4596 from './views/report/DPS_4596';
import DPS_4599 from './views/report/DPS_4599';
import DPS_45101 from './views/report/DPS_45101';
import DPS_45102 from './views/report/DPS_45102';
import DPS_45103 from './views/report/DPS_45103';
import OverallReport from './views/report/report';
import Transit_4251 from './views/report/Transit_4251';
import Transit_4252 from './views/report/Transit_4252';
import Transit_4273 from './views/report/Transit_4273';
import Transit_4253 from './views/report/Transit_4253';
import Transit_4254 from './views/report/Transit_4254';
import Transit_4255 from './views/report/Transit_4255';
import Transit_4256 from './views/report/Transit_4256';
import Transit_4260 from './views/report/Transit_4260';
import Transit_4261 from './views/report/Transit_4261';
import Transit_4263 from './views/report/Transit_4263';
import Transit_4264 from './views/report/Transit_4264';
import Transit_4257 from './views/report/Transit_4257';
import Transit_4258 from './views/report/Transit_4258';
import Transit_4259 from './views/report/Transit_4259';
import Transit_4265 from './views/report/Transit_4265';
import Transit_4266 from './views/report/Transit_4266';
import Transit_4267 from './views/report/Transit_4267';
import Transit_4268 from './views/report/Transit_4268';
import Transit_4270 from './views/report/Transit_4270';
import Transit_4271 from './views/report/Transit_4271';
import Transit_4272 from './views/report/Transit_4272';
import Transit_4274 from './views/report/Transit_4274';
import Transit_4275 from './views/report/Transit_4275';
import Transit_4276 from './views/report/Transit_4276';
import Transit_4277 from './views/report/Transit_4277';
import Transit_4278 from './views/report/Transit_4278';
import Transit_4279 from './views/report/Transit_4279';
import Transit_4280 from './views/report/Transit_4280';
import Transit_4281 from './views/report/Transit_4281';
import Transit_4282 from './views/report/Transit_4282';
import Transit_4283 from './views/report/Transit_4283';
import Transit_4284 from './views/report/Transit_4284';
import Revenue_4153_1400 from './views/report/Revenue_4153_1400';
import Revenue_4157_1400 from './views/report/Revenue_4157_1400';
import Revenue_4164_1400 from './views/report/Revenue_4164_1400';
import Revenue_4171_1400 from './views/report/Revenue_4171_1400';
import Revenue_48100 from './views/report/Revenue_48100';
import Revenue_48101 from './views/report/Revenue_48101';
import Revenue_4151 from './views/report/Revenue_4151';
import Revenue_4152 from './views/report/Revenue_4152';
import Revenue_4153 from './views/report/Revenue_4153';
import Revenue_4154 from './views/report/Revenue_4154';
import Revenue_4155 from './views/report/Revenue_4155';
import Revenue_4158 from './views/report/Revenue_4158';
import Revenue_4159 from './views/report/Revenue_4159';
import Revenue_4160 from './views/report/Revenue_4160';
import Revenue_4161 from './views/report/Revenue_4161';
import Revenue_4162 from './views/report/Revenue_4162';
import Revenue_4163 from './views/report/Revenue_4163';
import Revenue_4164 from './views/report/Revenue_4164';
import Revenue_4165 from './views/report/Revenue_4165';
import Revenue_4169 from './views/report/Revenue_4169';
import Revenue_4170 from './views/report/Revenue_4170';
import Revenue_4171 from './views/report/Revenue_4171';
import Revenue_4172 from './views/report/Revenue_4172';
import Revenue_4173 from './views/report/Revenue_4173';
import Selectivity_4360 from './views/report/Selectivity_4360';
import Selectivity_4361 from './views/report/Selectivity_4361';
import Selectivity_4350 from './views/report/Selectivity_4350';
import Selectivity_4351 from './views/report/Selectivity_4351';
import Selectivity_4352 from './views/report/Selectivity_4352';
import Selectivity_4353 from './views/report/Selectivity_4353';
import Selectivity_4354 from './views/report/Selectivity_4354';
import Selectivity_4355 from './views/report/Selectivity_4355';
import Selectivity_4356 from './views/report/Selectivity_4356';
import Valuation_4650 from './views/report/Valuation_4650';
import Valuation_4652 from './views/report/Valuation_4652';
import Valuation_4653 from './views/report/Valuation_4653';
import Valuation_4654 from './views/report/Valuation_4654';
import Valuation_4656 from './views/report/Valuation_4656';
import Valuation_4657 from './views/report/Valuation_4657';
import Valuation_4658 from './views/report/Valuation_4658';

const ListRoles = Loadable(lazy(() => import('./views/users/listRoles')));
const UsersList = Loadable(lazy(() => import('./views/users/ListUsers')));
const NotFound = Loadable(lazy(() => import('./views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('./views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('../app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('./views/sessions/ForgotPassword')));

const Revenue_4150 = Loadable(lazy(() => import('./views/report/Revenue_4150')));

const Transit_4250 = Loadable(lazy(() => import('./views/report/Transit_4250')));

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
          <Route
            path={routes.Revenue_4150}
            element={
              <PrivateRoute>
                <Revenue_4150 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4151}
            element={
              <PrivateRoute>
                <Revenue_4151 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4152}
            element={
              <PrivateRoute>
                <Revenue_4152 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4153}
            element={
              <PrivateRoute>
                <Revenue_4153 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4164}
            element={
              <PrivateRoute>
                <Revenue_4164 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4169}
            element={
              <PrivateRoute>
                <Revenue_4169 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4170}
            element={
              <PrivateRoute>
                <Revenue_4170 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4153_1400}
            element={
              <PrivateRoute>
                <Revenue_4153_1400 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4153}
            element={
              <PrivateRoute>
                <Revenue_4153 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4154}
            element={
              <PrivateRoute>
                <Revenue_4154 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4155}
            element={
              <PrivateRoute>
                <Revenue_4155 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4157_1400}
            element={
              <PrivateRoute>
                <Revenue_4157_1400 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4158}
            element={
              <PrivateRoute>
                <Revenue_4158 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4159}
            element={
              <PrivateRoute>
                <Revenue_4159 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4160}
            element={
              <PrivateRoute>
                <Revenue_4160 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4161}
            element={
              <PrivateRoute>
                <Revenue_4161 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4162}
            element={
              <PrivateRoute>
                <Revenue_4162 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4163}
            element={
              <PrivateRoute>
                <Revenue_4163 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4164_1400}
            element={
              <PrivateRoute>
                <Revenue_4164_1400 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4165}
            element={
              <PrivateRoute>
                <Revenue_4165 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4171}
            element={
              <PrivateRoute>
                <Revenue_4171 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4171_1400}
            element={
              <PrivateRoute>
                <Revenue_4171_1400 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4172}
            element={
              <PrivateRoute>
                <Revenue_4172 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_4173}
            element={
              <PrivateRoute>
                <Revenue_4173 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_48101}
            element={
              <PrivateRoute>
                <Revenue_48101 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Revenue_48100}
            element={
              <PrivateRoute>
                <Revenue_48100 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4250}
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
            path={routes.Transit_4254}
            element={
              <PrivateRoute>
                <Transit_4254 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4255}
            element={
              <PrivateRoute>
                <Transit_4255 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4256}
            element={
              <PrivateRoute>
                <Transit_4256 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4257}
            element={
              <PrivateRoute>
                <Transit_4257 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4258}
            element={
              <PrivateRoute>
                <Transit_4258 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4259}
            element={
              <PrivateRoute>
                <Transit_4259 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4260}
            element={
              <PrivateRoute>
                <Transit_4260 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4261}
            element={
              <PrivateRoute>
                <Transit_4261 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4263}
            element={
              <PrivateRoute>
                <Transit_4263 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4264}
            element={
              <PrivateRoute>
                <Transit_4264 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4265}
            element={
              <PrivateRoute>
                <Transit_4265 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4266}
            element={
              <PrivateRoute>
                <Transit_4266 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4267}
            element={
              <PrivateRoute>
                <Transit_4267 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4268}
            element={
              <PrivateRoute>
                <Transit_4268 />
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
            path={routes.Transit_4273}
            element={
              <PrivateRoute>
                <Transit_4273 />
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
          />
          <Route
            path={routes.Transit_4275}
            element={
              <PrivateRoute>
                <Transit_4275 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4276}
            element={
              <PrivateRoute>
                <Transit_4276 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4277}
            element={
              <PrivateRoute>
                <Transit_4277 />
              </PrivateRoute>
            }
          />
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
          <Route
            path={routes.Transit_4278}
            element={
              <PrivateRoute>
                <Transit_4278 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4253}
            element={
              <PrivateRoute>
                <Transit_4253 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4279}
            element={
              <PrivateRoute>
                <Transit_4279 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4280}
            element={
              <PrivateRoute>
                <Transit_4280 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Transit_4281}
            element={
              <PrivateRoute>
                <Transit_4281 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4650}
            element={
              <PrivateRoute>
                <Valuation_4650 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4652}
            element={
              <PrivateRoute>
                <Valuation_4652 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4653}
            element={
              <PrivateRoute>
                <Valuation_4653 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4654}
            element={
              <PrivateRoute>
                <Valuation_4654 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4656}
            element={
              <PrivateRoute>
                <Valuation_4656 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4657}
            element={
              <PrivateRoute>
                <Valuation_4657 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Valuation_4658}
            element={
              <PrivateRoute>
                <Valuation_4658 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Exemption_4750}
            element={
              <PrivateRoute>
                <Exemption_4750 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Exemption_4752}
            element={
              <PrivateRoute>
                <Exemption_4752 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4350}
            element={
              <PrivateRoute>
                <Selectivity_4350 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4351}
            element={
              <PrivateRoute>
                <Selectivity_4351 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4352}
            element={
              <PrivateRoute>
                <Selectivity_4352 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4353}
            element={
              <PrivateRoute>
                <Selectivity_4353 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4354}
            element={
              <PrivateRoute>
                <Selectivity_4354 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4355}
            element={
              <PrivateRoute>
                <Selectivity_4355 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Selectivity_4356}
            element={
              <PrivateRoute>
                <Selectivity_4356 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.Manifest_4450}
            element={
              <PrivateRoute>
                <Manifest_4450 />
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
            path={routes.DPS_4552}
            element={
              <PrivateRoute>
                <DPS_4552 />
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
            path={routes.DPS_4570}
            element={
              <PrivateRoute>
                <DPS_4570 />
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
            path={routes.DPS_4579}
            element={
              <PrivateRoute>
                <DPS_4579 />
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
            path={routes.DPS_4583}
            element={
              <PrivateRoute>
                <DPS_4583 />
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
            path={routes.DPS_45101}
            element={
              <PrivateRoute>
                <DPS_45101 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_45102}
            element={
              <PrivateRoute>
                <DPS_45102 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DPS_45103}
            element={
              <PrivateRoute>
                <DPS_45103 />
              </PrivateRoute>
            }
          />
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
            path={routes.DPS_4556}
            element={
              <PrivateRoute>
                <DPS_4556 />
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
            path={routes.DPS_4576}
            element={
              <PrivateRoute>
                <DPS_4576 />
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
            path={routes.DPS_4580}
            element={
              <PrivateRoute>
                <DPS_4580 />
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
          <Route
            path={routes.DataExchange_5053}
            element={
              <PrivateRoute>
                <DataExchange_5053 />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.DataExchange_5054}
            element={
              <PrivateRoute>
                <DataExchange_5054 />
              </PrivateRoute>
            }
          />
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
