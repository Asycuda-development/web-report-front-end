export const routes = {
  revenue4150: '/revenue4150',

  transit_4250: '/transit_4250',
  DPS_4551: '/DPS_4551',
  DPS_4557: '/DPS_4557',
  DPS_4553: '/DPS_4553',
  DPS_4573: '/DPS_4573',
  DPS_4575: '/DPS_4575',
  DPS_4572: '/DPS_4572',
  DPS_4550: '/DpsReport4550',
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
