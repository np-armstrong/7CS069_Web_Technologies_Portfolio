import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './listingTile.css';
import EditListing from '../editListing/EditListing.jsx'; 
import CancelListing from '../cancelListing/CancelListing.jsx';

function listingTile(props){

  // const id = props.id;
  // const make = props.make;
  // const model = props.model;
  // const dayRate = props.dayRate;
  // const location = props.location;

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
                    <p>Day Rate: £{props.dayRate}</p>
                    {/* <p>{`Total: $${calculateTotalCost(props.startDate, props.endDate, props.dayRate)}`}</p> */}
                    {/* <p>Total Cost: $$$</p> */}
                </div>
                <div className="listing-controls">                   
                    {/* This is our new Listingallowing us to pass map data to it */}
                    <EditListing
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      location={props.location}
                      day_rate={props.dayRate}
                    />
                    {/* TODO: Create Listingto handle deletion */}
                    {/* <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button> */}
                    <CancelListing
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      image_url={props.image}
                    />
                </div>
            </div>    
        </Container>
    </>
  )
}

export default listingTile