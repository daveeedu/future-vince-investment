import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import { useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
