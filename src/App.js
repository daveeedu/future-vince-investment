import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navigationbar from './components/Navigationbar';
import Dashboard from './pages/Dashboard';


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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
