import { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import './bookings.css'
import EditModal from '../../components/edit/Edit'

function Bookings() {

  // This array will be used to store dummy data for the bookings until the backend is connected
  let myBookings = [
    {
      'id': 1,
      'make': 'Honda',
      'model': 'CBR 1000RR',
      'start_date': '26/02/2024',
      'end_date': '26/03/2024',
      'image': "https://frasermotorcycles.com.au/cdn/shop/products/HONDA_CBR1000RR-R_SP_2022_2_1200x.png?v=1651111375"
    },
    {
      'id': 2,
      'make': 'Honda',
      'model': 'Zoomer X',
      'start_date': '26/02/2024',
      'end_date': '26/03/2024',
      'image': "https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/009.jpg"
    },
  ]

  const [openEditModal, setOpenEditModal] = useState(false);

  //Handle Cancellation 
  function handleCancel(){

    console.log("Cancel Button Clicked");
  }

  //Handle Edit
  function handleEdit(){
    setOpenEditModal(!openEditModal);
    console.log(openEditModal)
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
          {myBookings.map((booking, index) => {
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
                    <Button variant="outline-dark" onClick={handleEdit}>Edit</Button>
                    {/* Open the edit modal */}
                    {openEditModal && <EditModal 
                      show={openEditModal} 
                      onHide={() => setOpenEditModal(false)} 
                      title={`Edit Booking id: ${booking.id}`}
                      bike={`${booking.make} ${booking.model}`}
                    />}
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