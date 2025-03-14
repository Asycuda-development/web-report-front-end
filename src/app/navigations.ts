import TransitReport4267 from "./views/report/TransitReport4267";
import TransitReport4275 from "./views/report/TransitReport4275";
import TransitReport4276 from "./views/report/TransitReport4276";
import ValuationReport4653 from "./views/report/ValuationReport4653";
import ValuationReport4656 from "./views/report/ValuationReport4656";
import DataExchange5050 from './views/report/DataExchange_5050';
import Exemption_4753 from './views/report/Exemption_4753';

export const routes = {
  //////////////////////////////////////////////////////
  ////////////  Revenue Reprots Routes  ///////////////
  ////////////////////////////////////////////////////
  DataExchange_5050: '/DataExchangeReport5050',
  DataExchange_5051: '/DataExchangeReport5051',
  //////////////////////////////////////////////////////
  ////////////  Selectivity Reprots Routes  ///////////////
  ////////////////////////////////////////////////////
  Selectivity_4360: '/SelectivityReport4360',
  Selectivity_4361: '/SelectivityReport4361',
  //////////////////////////////////////////////////////
  ////////////  Revenue Reprots Routes  ///////////////
  ////////////////////////////////////////////////////

  revenue4150: '/revenue4150',
  RevenueReport4157_1400: '/RevenueReport4157_1400',
  RevenueReport4158: '/RevenueReport4158',
  RevenueReport4159: '/RevenueReport4159',
  RevenueReport4153_1400: '/RevenueReport4153_1400',
  RevenueReport4153: '/RevenueReport4153',
  RevenueReport4154: '/RevenueReport4154',
  RevenueReport4160: '/RevenueReport4160',
  RevenueReport4163: '/RevenueReport4163',
  RevenueReport4164_1400: '/RevenueReport4164_1400',
  RevenueReport4161: '/RevenueReport4161',
  RevenueReport4162: '/RevenueReport4162',
  RevenueReport4173: '/RevenueReport4173',
  RevenueReport48101: '/RevenueReport48101',
  RevenueReport48100: '/RevenueReport48100',
  TransitReport4257: '/TransitReport4257',
  TransitReport4279: '/TransitReport4279',
  TransitReport4280: '/TransitReport4280',
  TransitReport4281: '/TransitReport4281',
  transit_4250: '/transit_4250',
  TransitReport4258: '/TransitReport4258',
  TransitReport4259: '/TransitReport4259',
  TransitReport4265: '/TransitReport4265',
  TransitReport4266: '/TransitReport4266',
  TransitReport4267: '/TransitReport4267',
  TransitReport4268: '/TransitReport4268',
  TransitReport4275: '/TransitReport4275',
  TransitReport4276: '/TransitReport4276',
  TransitReport4277: '/TransitReport4277',
  TransitReport4278: '/TransitReport4278',
  ValuationReport4652: '/ValuationReport4652',
  ValuationReport4653: '/ValuationReport4653',
  ValuationReport4654: '/ValuationReport4654',
  ValuationReport4656: '/ValuationReport4656',
  ValuationReport4657: '/ValuationReport4657',
  ValuationReport4650: '/ValuationReport4650',
  ValuationReport4658: '/ValuationReport4658',
  ExemptionReport4750: '/ExemptionReport4750',
  ExemptionReport4752: '/ExemptionReport4752',
  SelectivityReport4350: '/SelectivityReport4350',
  SelectivityReport4351: '/SelectivityReport4351',
  SelectivityReport4352: '/SelectivityReport4352',
  SelectivityReport4353: '/SelectivityReport4353',
  SelectivityReport4354: '/SelectivityReport4354',
  SelectivityReport4355: '/SelectivityReport4355',
  SelectivityReport4356: '/SelectivityReport4356',
  ManifestReport4450: '/ManifestReport4450',
  DataExchangeReport5053: '/DataExchangeReport5053',
  DataExchangeReport5054: '/DataExchangeReport5054',

  DPS_4550: '/DpsReport4550',
  DPS_4551: '/DpsReport4551',
  DPS_4556: '/DpsReport4556',
  DPS_4554: '/DpsReport4554',
  DPS_4555: '/DpsReport4555',
  DPS_4558: '/DpsReport4558',
  DPS_4561: '/DpsReport4561',
  DPS_4564: '/DpsReport4564',
  DPS_4571: '/DpsReport4571',
  DPS_4565: '/DpsReport4565',
  DPS_4566: '/DpsReport4566',
  DPS_4562: '/DpsReport4562',
  DPS_4560: '/DpsReport4560',
  DPS_4559: '/DpsReport4559',
  DPS_4563: '/DpsReport4563',
  DPS_4578: '/DpsReport4578',
  DPS_4576: '/DpsReport4576',
  DPS_4585: '/DpsReport4585',
  DPS_4584: '/DpsReport4584',
  DPS_4586: '/DpsReport4586',
  DPS_4590: '/DpsReport4590',
  DPS_4591: '/DpsReport4591',
  revenue4151: '/revenue4151',
  revenue4155: '/revenue4155',
  revenue4165: '/revenue4165',
  revenue4171: '/revenue4171',
  revenue4171_1400: '/revenue4171_1400',
  revenue4172: '/revenue4172',
  //////////////////////////////////////////////////////
  ////////////  Transit Reprots Routes  ///////////////
  ////////////////////////////////////////////////////
  Transit_4251: '/transit_4251',
  Transit_4252: '/transit_4252',
  Transit_4270: '/transit_4270',
  Transit_4272: '/transit_4272',
  Transit_4274: '/transit_4274',
  Transit_4271: '/transit_4271',
  Transit_4282: '/transit_4282',
  Transit_4283: '/transit_4283',
  Transit_4284: '/transit_4284',
  //////////////////////////////////////////////////////
  ////////////     DPS  Reprots Routes  ///////////////
  ////////////////////////////////////////////////////
  DPS_4557: '/DPS_4557',
  DPS_4553: '/DPS_4553',
  DPS_4573: '/DPS_4573',
  DPS_4575: '/DPS_4575',
  DPS_4580: '/DPS_4580',
  DPS_4587: '/DPS_4587',
  DPS_4572: '/DPS_4572',
  DPS_4588: '/DPS_4588',
  DPS_4589: '/DPS_4589',
  DPS_4593: '/DPS_4593',
  DPS_4595: '/DPS_4595',
  DPS_4596: '/DPS_4596',
  DPS_4599: '/DPS_4599',
  //////////////////////////////////////////////////////
  ////////////     Exemption  Reprots Routes  //////////
  ////////////////////////////////////////////////////
  Exemption_4753: '/Exemption_4753',
  Exemption_4754: '/Exemption_4754',
  Exemption_4755: '/Exemption_4755',

  all: '*',
  base: '/*',
  Dashboard: '/dashboard',
  Users: '/users/list',
  Report: '/report',
  Roles: '/roles/list',
  signin: '/signin',
  signup: '/signup',
  forgotPassword: 'forgot-password/',
  404: '/404',
  session: {
    base: '/session/*',
    signin: '/session/signin',
    signup: '/session/signup',
    forgotPassword: '/session/forgot-password',
    404: '/session/404'
  }
};
