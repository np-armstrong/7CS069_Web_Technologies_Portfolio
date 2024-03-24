import React from 'react'
import { Container } from 'react-bootstrap'
import './bookingTile.css'

//lazy loading of the modals
const CancelModal = React.lazy(() => import('../cancelModal/CancelModal'));
const EditModal = React.lazy(() => import('../editModal/EditModal'));

const BookingTile = (props, {refreshKey, setRefreshKey}) => {
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
                    <p>Day Rate: £{props.dayRate}</p>
                    {/* <p>{`Total: $${calculateTotalCost(props.startDate, props.endDate, props.dayRate)}`}</p> */}
                    {/* <p>Total Cost: $$$</p> */}
                    <p>Total Cost: £{props.total}</p>
                </div>
                <div className="booking-controls">                   
                    {/* This is our new modal allowing us to pass map data to it */}
                    <EditModal 
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      dayRate={props.dayRate}
                      total={props.total}
                    />
                    {/* TODO: Create Modal to handle deletion */}
                    {/* <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button> */}
                    <CancelModal 
                      make={props.make}
                      model={props.model}
                      bookingId={props.id}
                      dayRate={props.dayRate}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      total={props.total}
                    />
                </div>
            </div>    
        </Container>
    </>
  )
}

export default BookingTile