import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Container } from 'react-bootstrap'
import './bookings.css'
import BookingTile from '../../components/bookingTile/BookingTile'
import Spinner from 'react-bootstrap/Spinner'


function Bookings() {

  //The below will be used to create dummy bookings to use in the map function
  const [bookingDetails, setBookingDetails] = useState([
    {
      'id': 1,
      'make': 'Honda',
      'model': 'CBR 1000RR',
      'start_date': "2024-03-01", //Dates updated with the correct format
      'end_date': "2024-03-02",
      'image': "https://frasermotorcycles.com.au/cdn/shop/products/HONDA_CBR1000RR-R_SP_2022_2_1200x.png?v=1651111375",
      'day_rate': 100
    },
    {
      'id': 2,
      'make': 'Honda',
      'model': 'Zoomer X',
      'start_date': "2024-03-05",
      'end_date': "2024-03-08",
      'image': "https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/009.jpg",
      'day_rate': 25
    },
  ]);
  
  const[bookings, setBookings] = useState([]) //!! This will be used to store the bookings from the backend

  //!! GET Bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings/'); //Uses the proxy in the package.json file to avoid CORS issues
        const data = await response.json();
        setBookings(Object.values(data));
      } catch (error) {
        console.error('Error fetching bookings:', error);
        // Handle errors (e.g., display an error message)
        alert('Error fetching bookings', error);
      }
    }; 

    fetchBookings();
  }, []); 
  
  return (
    <>
      <Navigation isBookings={true}/> {/* changes the navbar option based on page */}
      <Container>
        <div className="header">        
          <h1>My Bookings</h1>
          <hr/>
        </div>

        <div className='booking-map'>
          {bookings[0] != null ? bookings[0].map((booking, index) => {
            return (
              <BookingTile
                key={index}
                id={booking.id}
                make={booking.make}
                model={booking.model}
                startDate={booking.start_date}
                endDate={booking.end_date}
                image={booking.image}
                dayRate={booking.day_rate}
              />
            )
          }) : 
          <div className='spinner-container'>
            <Spinner animation="border" variant="dark" size='xl' />
          </div>
        }      
        </div>
      </Container> 

    </>
  )
}

export default Bookings

// <Container key={index} className='booking-container'>
// <div className="booking">
//   <div className="img-container">
//     <img src={booking.image} />
//   </div>
//   <div className="booking-details">
//     <h5>{booking.make} {booking.model}</h5>
//     <hr/>
//     <p>Start Date: {booking.start_date}</p>
//     <p>End Date: {booking.end_date}</p>
//     <p>Day Rate: ${booking.day_rate}</p>
//     <p>{`Total: $${calculateTotalCost(booking.start_date, booking.end_date, booking.day_rate)}`}</p>
//   </div>
//   <div className="booking-controls">                   
//     {/* This is our new modal allowing us to pass map data to it */}
//     <EditModal 
//       title={`Booking Id: ${booking.id}`}
//       bike={`${booking.make} ${booking.model}`}
//       startDate={booking.start_date}
//       endDate={booking.end_date}
//     />
//     {/* TODO: Create Modal to handle deletion */}
//     <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button>
//   </div>
// </div>    
// </Container>