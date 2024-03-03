import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';


// import Bike from './pages/bike/Bike.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import Bookings from './pages/bookings/Bookings.jsx'; 
import Profile from './pages/profile/Profile.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/Bookings" element={<Bookings />}/> 
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
