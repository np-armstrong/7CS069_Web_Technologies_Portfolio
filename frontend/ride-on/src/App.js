// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AuthProvider from './auth/authProvider.js';

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
import MyListings from './pages/myListings/MyListings.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';

function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/> 
          <Route element={<ProtectedRoute />}>
            <Route path="/Bookings" element={<Bookings />}/> 
            <Route path='/MyListings' element={<MyListings />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
