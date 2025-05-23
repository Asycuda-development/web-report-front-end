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
  REPORT_4250_TRANSIT: 'REPORT:4250-TRANSIT',
  REPORT_4251_TRANSIT: 'REPORT:4251-TRANSIT',
  REPORT_4252_TRANSIT: 'REPORT:4252-TRANSIT',
  REPORT_4253_TRANSIT: 'REPORT:4253-TRANSIT',
  REPORT_4254_TRANSIT: 'REPORT:4254-TRANSIT',
  REPORT_4255_TRANSIT: 'REPORT:4255-TRANSIT',
  REPORT_4256_TRANSIT: 'REPORT:4256-TRANSIT',
  REPORT_4257_TRANSIT: 'REPORT:4257-TRANSIT',
  REPORT_4258_TRANSIT: 'REPORT:4258-TRANSIT',
  REPORT_4259_TRANSIT: 'REPORT:4259-TRANSIT',
  REPORT_4260_TRANSIT: 'REPORT:4260-TRANSIT',
  REPORT_4261_TRANSIT: 'REPORT:4261-TRANSIT',
  REPORT_4263_TRANSIT: 'REPORT:4263-TRANSIT',
  REPORT_4264_TRANSIT: 'REPORT:4264-TRANSIT',
  REPORT_4265_TRANSIT: 'REPORT:4265-TRANSIT',
  REPORT_4266_TRANSIT: 'REPORT:4266-TRANSIT',
  REPORT_4267_TRANSIT: 'REPORT:4267-TRANSIT',
  REPORT_4268_TRANSIT: 'REPORT:4268-TRANSIT',
  REPORT_4270_TRANSIT: 'REPORT:4270-TRANSIT',
  REPORT_4271_TRANSIT: 'REPORT:4271-TRANSIT',
  REPORT_4272_TRANSIT: 'REPORT:4272-TRANSIT',
  REPORT_4273_TRANSIT: 'REPORT:4273-TRANSIT',
  REPORT_4274_TRANSIT: 'REPORT:4274-TRANSIT',
  REPORT_4275_TRANSIT: 'REPORT:4275-TRANSIT',
  REPORT_4276_TRANSIT: 'REPORT:4276-TRANSIT',
  REPORT_4277_TRANSIT: 'REPORT:4277-TRANSIT',
  REPORT_4278_TRANSIT: 'REPORT:4278-TRANSIT',
  REPORT_4279_TRANSIT: 'REPORT:4279-TRANSIT',
  REPORT_4280_TRANSIT: 'REPORT:4280-TRANSIT',
  REPORT_4281_TRANSIT: 'REPORT:4281-TRANSIT',
  REPORT_4282_TRANSIT: 'REPORT:4282-TRANSIT',
  REPORT_4283_TRANSIT: 'REPORT:4283-TRANSIT',
  REPORT_4284_TRANSIT: 'REPORT:4284-TRANSIT',
  REPORT_4550_DPS: 'REPORT:4550-DPS',
  REPORT_4551_DPS: 'REPORT:4551-DPS',
  REPORT_4552_DPS: 'REPORT:4552-DPS',
  REPORT_4553_DPS: 'REPORT:4553-DPS',
  REPORT_4554_DPS: 'REPORT:4554-DPS',
  REPORT_4555_DPS: 'REPORT:4555-DPS',
  REPORT_4556_DPS: 'REPORT:4556-DPS',
  REPORT_4557_DPS: 'REPORT:4557-DPS',
  REPORT_4558_DPS: 'REPORT:4558-DPS',
  REPORT_4559_DPS: 'REPORT:4559-DPS',
  REPORT_4560_DPS: 'REPORT:4560-DPS',
  REPORT_4561_DPS: 'REPORT:4561-DPS',
  REPORT_4562_DPS: 'REPORT:4562-DPS',
  REPORT_4563_DPS: 'REPORT:4563-DPS',
  REPORT_4564_DPS: 'REPORT:4564-DPS',
  REPORT_4565_DPS: 'REPORT:4565-DPS',
  REPORT_4566_DPS: 'REPORT:4566-DPS',
  REPORT_4570_DPS: 'REPORT:4570-DPS',
  REPORT_4571_DPS: 'REPORT:4571-DPS',
  REPORT_4572_DPS: 'REPORT:4572-DPS',
  REPORT_4573_DPS: 'REPORT:4573-DPS',
  REPORT_4575_DPS: 'REPORT:4575-DPS',
  REPORT_4576_DPS: 'REPORT:4576-DPS',
  REPORT_4578_DPS: 'REPORT:4578-DPS',
  REPORT_4579_DPS: 'REPORT:4579-DPS',
  REPORT_4580_DPS: 'REPORT:4580-DPS',
  REPORT_4583_DPS: 'REPORT:4583-DPS',
  REPORT_4584_DPS: 'REPORT:4584-DPS',
  REPORT_4585_DPS: 'REPORT:4585-DPS',
  REPORT_4586_DPS: 'REPORT:4586-DPS',
  REPORT_4587_DPS: 'REPORT:4587-DPS',
  REPORT_4588_DPS: 'REPORT:4588-DPS',
  REPORT_4589_DPS: 'REPORT:4589-DPS',
  REPORT_4590_DPS: 'REPORT:4590-DPS',
  REPORT_4591_DPS: 'REPORT:4591-DPS',
  REPORT_4593_DPS: 'REPORT:4593-DPS',
  REPORT_4595_DPS: 'REPORT:4595-DPS',
  REPORT_4596_DPS: 'REPORT:4596-DPS',
  REPORT_4599_DPS: 'REPORT:4599-DPS',
  REPORT_45101_DPS: 'REPORT:45101-DPS',
  REPORT_45102_DPS: 'REPORT:45102-DPS',
  REPORT_45103_DPS: 'REPORT:45103-DPS',
  REPORT_4650_VALUATION: 'REPORT:4650-VALUATION',
  REPORT_4652_VALUATION: 'REPORT:4652-VALUATION',
  REPORT_4653_VALUATION: 'REPORT:4653-VALUATION',
  REPORT_4654_VALUATION: 'REPORT:4654-VALUATION',
  REPORT_4656_VALUATION: 'REPORT:4656-VALUATION',
  REPORT_4657_VALUATION: 'REPORT:4657-VALUATION',
  REPORT_4658_VALUATION: 'REPORT:4658-VALUATION',
  REPORT_4350_SELECTIVITY: '/REPORT:4350-SELECTIVITY',
  REPORT_4351_SELECTIVITY: '/REPORT:4351-SELECTIVITY',
  REPORT_4352_SELECTIVITY: '/REPORT:4352-SELECTIVITY',
  REPORT_4353_SELECTIVITY: '/REPORT:4353-SELECTIVITY',
  REPORT_4354_SELECTIVITY: '/REPORT:4354-SELECTIVITY',
  REPORT_4355_SELECTIVITY: '/REPORT:4355-SELECTIVITY',
  REPORT_4356_SELECTIVITY: '/REPORT:4356-SELECTIVITY',
  REPORT_4360_SELECTIVITY: '/REPORT:4360-SELECTIVITY',
  REPORT_4361_SELECTIVITY: '/REPORT:4361-SELECTIVITY',
  REPORT_4450_MANIFEST: '/REPORT:4450-MANIFEST',
  REPORT_5050_DATAEXCHANGE: 'REPORT:5050-DATAEXCHANGE',
  REPORT_5051_DATAEXCHANGE: 'REPORT:5051-DATAEXCHANGE',
  REPORT_5053_DATAEXCHANGE: 'REPORT:5053-DATAEXCHANGE',
  REPORT_5054_DATAEXCHANGE: 'REPORT:5054-DATAEXCHANGE',
  Report_4750_Exemption: 'REPORT:4750-Exemption',
  Report_4752_Exemption: 'REPORT:4752-Exemption',
  Report_4753_Exemption: 'REPORT:4753-Exemption',
  Report_4754_Exemption: 'REPORT:4754-Exemption',
  Report_4755_Exemption: 'REPORT:4755-Exemption',
  REPORT_4157_1400_REVENUE: 'REPORT:4157_1400-REVENUE',
  REPORT_4164_1400_REVENUE: 'REPORT:4164_1400-REVENUE',
  REPORT_4171_1400_REVENUE: 'REPORT:4171_1400-REVENUE',
  REPORT_4153_1400_REVENUE: 'REPORT:4153_1400-REVENUE',
  REPORT_4150_REVENUE: 'REPORT:4150-REVENUE',
  REPORT_4151_REVENUE: 'REPORT:4151-REVENUE',
  REPORT_4152_REVENUE: 'REPORT:4152-REVENUE',
  REPORT_4153_REVENUE: 'REPORT:4153-REVENUE',
  REPORT_4154_REVENUE: 'REPORT:4154-REVENUE',
  REPORT_4155_REVENUE: 'REPORT:4155-REVENUE',
  REPORT_4158_REVENUE: 'REPORT:4158-REVENUE',
  REPORT_4159_REVENUE: 'REPORT:4159-REVENUE',
  REPORT_4160_REVENUE: 'REPORT:4160-REVENUE',
  REPORT_4161_REVENUE: 'REPORT:4161-REVENUE',
  REPORT_4162_REVENUE: 'REPORT:4162-REVENUE',
  REPORT_4163_REVENUE: 'REPORT:4163-REVENUE',
  REPORT_4164_REVENUE: 'REPORT:4164-REVENUE',
  REPORT_4165_REVENUE: 'REPORT:4165-REVENUE',
  REPORT_4169_REVENUE: 'REPORT:4169-REVENUE',
  REPORT_4170_REVENUE: 'REPORT:4170-REVENUE',
  REPORT_4171_REVENUE: 'REPORT:4171-REVENUE',
  REPORT_4172_REVENUE: 'REPORT:4172-REVENUE',
  REPORT_4173_REVENUE: 'REPORT:4173-REVENUE',
  REPORT_48100_REVENUE: 'REPORT:48100-REVENUE',
  REPORT_48101_REVENUE: 'REPORT:48101-REVENUE',
};
