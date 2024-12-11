import DPS_4563 from "./views/report/DPS_4563";
import DPS_4576 from "./views/report/DPS_4576";
import DPS_4578 from "./views/report/DPS_4578";
import DPS_4584 from "./views/report/DPS_4584";
import DPS_4585 from "./views/report/DPS_4585";

export const routes = {
  revenue4150: '/revenue4150',

  transit_4250: '/transit_4250',
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
