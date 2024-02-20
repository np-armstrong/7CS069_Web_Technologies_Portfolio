import { react } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';


import Listings from './pages/listings/Listings.jsx';
import Bike from './pages/bike/Bike.jsx';
import HomePage from './pages/homePage/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/listings" element={<Listings/>} />
        <Route path="/listings/:id" element={<Bike/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
