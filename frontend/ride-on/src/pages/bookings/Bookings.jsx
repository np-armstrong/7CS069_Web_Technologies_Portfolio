import React, { Suspense, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Container } from 'react-bootstrap'
import './bookings.css'
import Spinner from 'react-bootstrap/Spinner'


//Lazy loading the tile 
const BookingTile = React.lazy(() => import('../../components/bookingTile/BookingTile'));


function Bookings() {

  const[bookings, setBookings] = useState([]) 
  const[token, setToken] = useState(localStorage.getItem('site') || ""); 
  const[user, setUser] = useState(localStorage.getItem('user') || ""); 
  
  useEffect(() => {
    const fetchBookings = async () => {

      try {
        const response = await fetch(`http://localhost:8000/api/userbookings/${user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        }); 
        const data = await response.json();
        setBookings(Object.values(data));
      } catch (error) {
        console.error('Error fetching bookings:', error);
        alert('Error fetching bookings', error);
      }

    }; 
    
    fetchBookings();
  }, []); 
  
  return (
    <>
      <Navigation isBookings={true}/>
      <Container>
        <div className="header">        
          <h1>My Bookings</h1>
          <hr/>
        </div>
        {bookings && Object.keys(bookings).length > 0 ? <div className='booking-map'> 
          {bookings != null ? bookings.map((booking, index) => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <BookingTile
                  key={index}
                  id={booking.id}
                  make={booking.make}
                  model={booking.model}
                  startDate={booking.start_date}
                  endDate={booking.end_date}
                  image={booking.image_url}
                  dayRate={booking.day_rate}
                  total={booking.total}
                />
              </Suspense>
            )
          }) : 
          <div className='spinner-container'>
            <Spinner animation="border" variant="dark" size='xl' />
          </div>}      
        </div> : <h4 style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>No Bookings Created</h4>}
      </Container> 

    </>
  )
}

export default Bookings