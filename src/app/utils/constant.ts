import SelectivityReport4356 from "../views/report/SelectivityReport4356";
import TransitReport4267 from "../views/report/TransitReport4267";
import TransitReport4275 from "../views/report/TransitReport4275";
import TransitReport4276 from "../views/report/TransitReport4276";

export const topBarHeight = 64;
export const sideNavWidth = 205;
export const navbarHeight = 60;
export const sidenavCompactWidth = 80;
export const containedLayoutWidth = 1200;
// export const SERVER_API_URL = 'http://192.168.0.42:8082';
export const SERVER_API_URL = 'http://localhost:8081/api';
export const SUCCESS_CREATE_MESSAGE = 'Successfully Created';
export const SUCCESS_UPDATE_MESSAGE = 'Successfully Updated';
export const SUCCESS_DELETE_MESSAGE = 'Successfully Deleted';
export const ERROR_CREATE_MESSAGE = 'Error occured on Create';
export const ERROR_UPDATE_MESSAGE = 'Error occured on Update';
export const ERROR_DELETE_MESSAGE = 'Error occured on Delete';
export const ROWS_PER_PAGE = 10;
export const APP_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const AUTHORITIES = {
  ADMIN: 'ADMIN',
  SETTINGS: 'SETTINGS',
  DASHBOARD: 'DASHBOARD',
  USER_CREATE: 'USER:CREATE',
  USER_UPDATE: 'USER:UPDATE',
  USER_DELETE: 'USER:DELETE',
  USER_READ: 'USER:READ',
  ROLE_CREATE: 'ROLE:CREATE',
  ROLE_UPDATE: 'ROLE:UPDATE',
  ROLE_DELETE: 'ROLE:DELETE',
  ROLE_READ: 'ROLE:READ',
  REPORT_SIGTAS: 'REPORT:SIGTAS',
  // Transit Reports>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  REPORT_4250_TRANSIT: 'REPORT:4250-TRANSIT',
  REPORT_4251_TRANSIT: 'REPORT:4251-TRANSIT',
  REPORT_4252_TRANSIT: 'REPORT:4252-TRANSIT',
  REPORT_4270_TRANSIT: 'REPORT:4270-TRANSIT',
  REPORT_4272_TRANSIT: 'REPORT:4272-TRANSIT',
  REPORT_4271_TRANSIT: 'REPORT:4271-TRANSIT',
  REPORT_4274_TRANSIT: 'REPORT:4274-TRANSIT',
  REPORT_4282_TRANSIT: 'REPORT:4282-TRANSIT',
  REPORT_4283_TRANSIT: 'REPORT:4283-TRANSIT',
  REPORT_4284_TRANSIT: 'REPORT:4284-TRANSIT',
  // DPS Reports>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  REPORT_4550_DPS: 'REPORT:4550-DPS',
  REPORT_4551_DPS: 'REPORT:4551-DPS',
  REPORT_4556_DPS: 'REPORT:4556-DPS',
  REPORT_4554_DPS: 'REPORT:4554-DPS',
  REPORT_4555_DPS: 'REPORT:4555-DPS',
  REPORT_4558_DPS: 'REPORT:4558-DPS',
  REPORT_4561_DPS: 'REPORT:4561-DPS',
  REPORT_4564_DPS: 'REPORT:4564-DPS',
  REPORT_4571_DPS: 'REPORT:4571-DPS',
  REPORT_4565_DPS: 'REPORT:4565-DPS',
  REPORT_4566_DPS: 'REPORT:4566-DPS',
  REPORT_4562_DPS: 'REPORT:4562-DPS',
  REPORT_4560_DPS: 'REPORT:4560-DPS',
  REPORT_4559_DPS: 'REPORT:4559-DPS',
  REPORT_4563_DPS: 'REPORT:4563-DPS',
  REPORT_4578_DPS: 'REPORT:4578-DPS',
  REPORT_4576_DPS: 'REPORT:4576-DPS',
  REPORT_4585_DPS: 'REPORT:4585-DPS',
  REPORT_4584_DPS: 'REPORT:4584-DPS',
  REPORT_4586_DPS: 'REPORT:4586-DPS',
  REPORT_4590_DPS: 'REPORT:4590-DPS',
  REPORT_4591_DPS: 'REPORT:4591-DPS',
  TransitReport4257: '/TransitReport4257',
  TransitReport4258: '/TransitReport4258',
  TransitReport4259: '/TransitReport4259',
  TransitReport4265: '/TransitReport4265',
  TransitReport4266: '/TransitReport4266',
  TransitReport4268: '/TransitReport4268',
  TransitReport4267: '/TransitReport4267',
  TransitReport4275: '/TransitReport4275',
  TransitReport4276: '/TransitReport4276',
  TransitReport4277: '/TransitReport4277',
  TransitReport4278: '/TransitReport4278',
  TransitReport4279: '/TransitReport4279',
  TransitReport4280: '/TransitReport4280',
  TransitReport4281: '/TransitReport4281',
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
  REPORT_4150_REVENUE: 'REPORT:4150-REVENUE',
  RevenueReport4157_1400: 'RevenueReport4157_1400',
  RevenueReport4159: '/RevenueReport4159',
  RevenueReport4153_1400: '/RevenueReport4153_1400',
  RevenueReport4153: '/RevenueReport4153',
  RevenueReport4154: '/RevenueReport4154',
  RevenueReport4160: '/RevenueReport4160',
  RevenueReport4163: '/RevenueReport4163',
  RevenueReport4161: '/RevenueReport4161',
  RevenueReport4162: '/RevenueReport4162',
  RevenueReport4173: '/RevenueReport4173',
  RevenueReport48101: '/RevenueReport48101',
  RevenueReport48100: '/RevenueReport48100',
  RevenueReport4164_1400: '/RevenueReport4164_1400',
  RevenueReport4158: 'RevenueReport4158'
  Report_4551_DPS: 'REPORT:4551-DPS',
  Report_4557_DPS: 'REPORT:4557-DPS',
  Report_4553_DPS: 'REPORT:4553-DPS',
  Report_4573_DPS: 'REPORT:4573-DPS',
  Report_4575_DPS: 'REPORT:4575-DPS',
  Report_4572_DPS: 'REPORT:4572-DPS',
  Report_4580_DPS: 'REPORT:4580-DPS',
  Report_4587_DPS: 'REPORT:4587-DPS',
  Report_4588_DPS: 'REPORT:4588-DPS',
  Report_4589_DPS: 'REPORT:4589-DPS',
  Report_4593_DPS: 'REPORT:4593-DPS',
  Report_4595_DPS: 'REPORT:4595-DPS',
  Report_4596_DPS: 'REPORT:4596-DPS',
  Report_4599_DPS: 'REPORT:4599-DPS',

  // DataExchange Reports>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Report_5050_DataExchange: 'REPORT:5050-DataExchange',
  Report_5051_DataExchange: 'REPORT:5051-DataExchange',

  // selectivity Reports>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Report_4360_Selectivity: 'REPORT:4360-Selectivity',
  Report_4361_Selectivity: 'REPORT:4361-Selectivity',
  // Exemtion Reports>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Report_4753_Exemption: 'REPORT:4753-Exemption',
  Report_4754_Exemption: 'REPORT:4754-Exemption',
  Report_4755_Exemption: 'REPORT:4755-Exemption',
  //Revenue Reports>>>>>>>>>>>>>>>>>>>>>
  REPORT_4150_REVENUE: 'REPORT:4150-REVENUE',
  REPORT_4151_REVENUE: 'REPORT:4151-REVENUE',
  REPORT_4155_REVENUE: 'REPORT:4155-REVENUE',
  REPORT_4165_REVENUE: 'REPORT:4165-REVENUE',
  REPORT_4171_REVENUE: 'REPORT:4171-REVENUE',
  REPORT_4171_1400_REVENUE: 'REPORT:4171_1400-REVENUE',
  REPORT_4172_REVENUE: 'REPORT:4172-REVENUE'
};
