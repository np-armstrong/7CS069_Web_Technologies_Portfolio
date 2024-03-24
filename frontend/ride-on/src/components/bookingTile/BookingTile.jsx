import React, { Suspense } from 'react'
import { Container } from 'react-bootstrap'
import './bookingTile.css'

//lazy loading of the modals
const CancelModal = React.lazy(() => import('../cancelModal/CancelModal'));
const EditModal = React.lazy(() => import('../editModal/EditModal'));

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
                    <p>Day Rate: £{props.dayRate}</p>
                    <p>Total Cost: £{props.total}</p>
                </div>
                <div className="booking-controls">     
                  <Suspense fallback={<div>Loading...</div>}>              
                    <EditModal 
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      dayRate={props.dayRate}
                      total={props.total}
                    />
                    <CancelModal 
                      make={props.make}
                      model={props.model}
                      bookingId={props.id}
                      dayRate={props.dayRate}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      total={props.total}
                    />
                  </Suspense>
                </div>
            </div>    
        </Container>
    </>
  )
}

export default BookingTile