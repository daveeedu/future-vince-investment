import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navigationbar from './components/Navigationbar';
import Dashboard from './pages/Dashboard';
import DashboardTwo from './pages/DashboardTwo';
import SecuritySettings from './components/dashboard/accountSecurity/SecuritySettings';
import Invest from './components/dashboard/investment/Invest';
import Profile from './components/dashboard/profile/Profile';
import Referrals from './components/dashboard/referrals/Referrals';
import Reinvest from './components/dashboard/reinvest/Reinvest';
import Withdrawal from './components/dashboard/withdraw/Withdrawal';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/AboutPage" element={<AboutPage />}/>
          <Route path="/ContactPage" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboardtwo" element={<DashboardTwo />}/>
          <Route path="/invest" element={<Invest />}/>
          <Route path="/reinvest" element={<Reinvest />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/referrals" element={<Referrals />}/>
          <Route path="/withdrawal" element={<Withdrawal />}/>
          <Route path="/securitySettings" element={<SecuritySettings />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
