/* eslint-disable import/first */
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AuthProvider from './auth/authProvider.js';
import React, { lazy, Suspense } from 'react'; 
import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/homePage/HomePage.jsx';

//Lazy loading components
const Register = lazy(() => import('./pages/register/Register.jsx'));
const Login = lazy(() => import('./pages/login/Login.jsx'));
const Bookings = lazy(() => import('./pages/bookings/Bookings.jsx'));
const MyListings = lazy(() => import('./pages/myListings/MyListings.jsx'));
const ProtectedRoute = lazy(() => import('./auth/ProtectedRoute.jsx'));

//Suspense will display a loading message while the components are being loaded
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense> 
    </BrowserRouter>
  );
}

export default App;
