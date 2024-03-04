import React from 'react'
import { Container, Button } from 'react-bootstrap'
import EditModal from '../editModal/EditModal'
import './bookingTile.css'

function handleCancel(){
    console.log("Cancel Button Clicked");
};

    //!! THIS WILL BE MOVED OVER TO THE CREATE MODAL COMPONENT -- TOTALS WILL COME FROM THE BACKEND !!
    //Function to calculate the total cost of the booking -- This appears to work fine, test with jest!
    function calculateTotalCost(startDate, endDate, dayRate){

    //Convert the dates to a date object
    const date1 = new Date(startDate).getDate(); 
    const date2 = new Date(endDate).getDate();
    
    const total = (date2 - date1) * dayRate;

    return total; 
  }

const BookingTile = (props) => {
  return (
    <>
        <Container key={props.index} className='booking-container'>
            <div className="booking">
                <div className="img-container">
                    <img src={props.image} />
                </div>
                <div className="booking-details">
                    <h5>{props.make} {props.model}</h5>
                    <hr/>
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                    <p>Day Rate: ${props.dayRate}</p>
                    <p>{`Total: $${calculateTotalCost(props.startDate, props.endDate, props.dayRate)}`}</p>
                    {/* <p>Total Cost: $$$</p> */}
                </div>
                <div className="booking-controls">                   
                    {/* This is our new modal allowing us to pass map data to it */}
                    <EditModal 
                      title={`Booking Id: ${props.id}`}
                      bike={`${props.make} ${props.model}`}
                      startDate={props.startDate}
                      endDate={props.endDate}
                    />
                    {/* TODO: Create Modal to handle deletion */}
                    <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>    
        </Container>
    </>
  )
}

export default BookingTile