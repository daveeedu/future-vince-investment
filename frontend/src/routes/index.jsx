import { Routes, Route } from 'react-router-dom';
import config from '../config/app.config.js';
import AboutPage from '../pages/AboutPage';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import DashboardTwo from '../pages/DashboardTwo';
import SecuritySettings from '../components/dashboard/accountSecurity/SecuritySettings';
import AdminSecuritySettings from '../components/dashboard/accountSecurity/AdminSecuritySettings';
import Invest from '../components/dashboard/investment/Invest';
import Profile from '../components/dashboard/profile/Profile';
import Referrals from '../components/dashboard/referrals/Referrals';
import Reinvest from '../components/dashboard/reinvest/Reinvest';
import Withdrawal from '../components/dashboard/withdraw/Withdrawal';
import Users from '../components/admin/Users';
import AdminDash from '../components/admin/AdminDash';
import AdminDash2 from '../components/admin/AdminDash2';
import ProtectedRoute from './ProtectedRoute.jsx';
import { USER_ROLES } from '../config/constants.js';

const { pageUrls } = config;

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={pageUrls.home} element={<Home />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/ContactPage" element={<SignUp />} />
      
      {/* Auth Routes */}
      <Route path={pageUrls.login} element={<Login />} />
      <Route path={pageUrls.signup} element={<SignUp />} />
      
      {/* User Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.dashboard} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <DashboardTwo />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.invest} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Invest />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.reinvest} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Reinvest />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.profile} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.referrals} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Referrals />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.withdrawal} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <Withdrawal />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.security} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.USER]}>
            <SecuritySettings />
          </ProtectedRoute>
        } 
      />
      
      {/* Admin Routes */}
      <Route 
        path={pageUrls.users} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
            <Users />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.adminDash} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
            <AdminDash />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.adminDashTwo} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
            <AdminDash2 />
          </ProtectedRoute>
        } 
      />
      <Route 
        path={pageUrls.adminSecuritySettings} 
        element={
          <ProtectedRoute allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
            <AdminSecuritySettings />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
