import config from './app.config.js';

export const routes = {
  public: [
    {
      path: config.pageUrls.home,
      component: () => import('../pages/Home.jsx'),
    },
    {
      path: '/AboutPage',
      component: () => import('../pages/AboutPage.jsx'),
    },
    {
      path: '/ContactPage',
      component: () => import('../pages/SignUp.jsx'),
    },
  ],
  auth: [
    {
      path: config.pageUrls.login,
      component: () => import('../pages/Login.jsx'),
    },
    {
      path: config.pageUrls.signup,
      component: () => import('../pages/SignUp.jsx'),
    },
  ],
  user: [
    {
      path: '/dashboard',
      component: () => import('../pages/Dashboard.jsx'),
    },
    {
      path: config.pageUrls.dashboard,
      component: () => import('../pages/DashboardTwo.jsx'),
    },
    {
      path: config.pageUrls.invest,
      component: () => import('../components/dashboard/investment/Invest.jsx'),
    },
    {
      path: config.pageUrls.reinvest,
      component: () => import('../components/dashboard/reinvest/Reinvest.jsx'),
    },
    {
      path: config.pageUrls.profile,
      component: () => import('../components/dashboard/profile/Profile.jsx'),
    },
    {
      path: config.pageUrls.referrals,
      component: () => import('../components/dashboard/referrals/Referrals.jsx'),
    },
    {
      path: config.pageUrls.withdrawal,
      component: () => import('../components/dashboard/withdraw/Withdrawal.jsx'),
    },
    {
      path: config.pageUrls.security,
      component: () => import('../components/dashboard/accountSecurity/SecuritySettings.jsx'),
    },
  ],
  admin: [
    {
      path: config.pageUrls.users,
      component: () => import('../components/admin/Users.jsx'),
    },
    {
      path: config.pageUrls.adminDash,
      component: () => import('../components/admin/AdminDash.jsx'),
    },
    {
      path: config.pageUrls.adminDashTwo,
      component: () => import('../components/admin/AdminDash2.jsx'),
    },
    {
      path: config.pageUrls.adminSecuritySettings,
      component: () => import('../components/dashboard/accountSecurity/AdminSecuritySettings.jsx'),
    },
  ],
};

export default routes;
