import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './listingTile.css';
import EditListing from '../editListing/EditListing.jsx'; 
import CancelListing from '../cancelListing/CancelListing.jsx';

//!! TODO - Add authentication to this tile

function listingTile(props){
  return (
    <>
        <Container key={props.index} className='listing-container'>
            <div className="listing">
                <div className="img-container">
                    <img src={props.image} />
                </div>
                <div className="listing-details">
                    <h5>{props.make} {props.model}</h5>
                    <hr/>
                    <p>Location: {props.location}</p>
                    <p>Day Rate: ${props.dayRate}</p>
                    {/* <p>{`Total: $${calculateTotalCost(props.startDate, props.endDate, props.dayRate)}`}</p> */}
                    {/* <p>Total Cost: $$$</p> */}
                </div>
                <div className="listing-controls">                   
                    {/* This is our new Listingallowing us to pass map data to it */}
                    <EditListing
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      dayRate={props.dayRate}
                      total={props.total}
                    />
                    {/* TODO: Create Listingto handle deletion */}
                    {/* <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button> */}
                    <CancelListing
                      make={props.make}
                      model={props.model}
                      listingId={props.id}
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

export default listingTile