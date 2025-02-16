import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
 
import DashboardLayoutBasic from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        {/* Routes for Signup and Login */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Route with nested routes */}
        <Route path="/Dashboard/*" element={<DashboardLayoutBasic />} />
      </Routes>
    </>
  );
}

export default App;
