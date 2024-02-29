import { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Button } from 'react-bootstrap'
import './bookings.css'
import EditModal from '../../components/editModal/EditModal'

function Bookings() {

  //The below will be used to create dummy bookings to use in the map function
  const [bookingDetails, setBookingDetails] = useState([
    {
      'id': 1,
      'make': 'Honda',
      'model': 'CBR 1000RR',
      'start_date': "2024-03-01", //Dates updated with the correct format
      'end_date': "2024-03-02",
      'image': "https://frasermotorcycles.com.au/cdn/shop/products/HONDA_CBR1000RR-R_SP_2022_2_1200x.png?v=1651111375"
    },
    {
      'id': 2,
      'make': 'Honda',
      'model': 'Zoomer X',
      'start_date': "2024-03-05",
      'end_date': "2024-03-08",
      'image': "https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/009.jpg"
    },
    {
      'id': 3,
      'make': 'Honda',
      'model': 'Wave 110i',
      'start_date': "2024-03-08",
      'end_date': "2024-03-09",
      'image': "https://yuhmak.vtexassets.com/arquivos/ids/185655-800-auto?v=638406683490070000&width=800&height=auto&aspect=true"
    },
    {
      'id': 4,
      'make': 'KTM',
      'model': '390 Duke',
      'start_date': "2024-03-10",
      'end_date': "2024-03-12",
      'image': "https://wmr1.com/cdn/shop/files/ktm-390-duke-1.jpg?v=1707410892&width=1080"
    }
  ]);

  //Handle Cancellation -- This will delete a booking from the database
  function handleCancel(){
    console.log("Cancel Button Clicked");
  }
  
  return (
    <>
      <Navigation isBookings={true}/> {/* changes the navbar option based on page */}
      <Container>
        <div className="header">        
          <h1>My Bookings</h1>
          <hr/>
        </div>

        <div>
          {bookingDetails.map((booking, index) => {
            return (
              <Container key={index} className='booking-container'>
                <div className="booking">
                  <div className="img-container">
                    <img src={booking.image} />
                  </div>
                  <div className="booking-details">
                    <h5>{booking.make} {booking.model}</h5>
                    <hr/>
                    <p>Start Date: {booking.start_date}</p>
                    <p>End Date: {booking.end_date}</p>
                  </div>
                  <div className="booking-controls">                   
                    {/* This is our new modal allowing us to pass map data to it */}
                    <EditModal 
                      title={`Booking Id: ${booking.id}`}
                      bike={`${booking.make} ${booking.model}`}
                      startDate={booking.start_date}
                      endDate={booking.end_date}
                    />
                    {/* TODO: Create Modal to handle deletion */}
                    <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button>
                  </div>
                </div>    
              </Container>
            )
          })}      
        </div>
      </Container>   
    </>
  )
}

export default Bookings