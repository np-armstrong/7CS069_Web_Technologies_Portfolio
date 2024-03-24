import React, { Suspense } from 'react';
import { Container, Button } from 'react-bootstrap';
import './listingTile.css';

//Lazy loading of the modals
const EditListing = React.lazy(() => import('../editListing/EditListing'));
const CancelListing = React.lazy(() => import('../cancelListing/CancelListing'));

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
                    <p>Day Rate: £{props.dayRate}</p>
                </div>
                <div className="listing-controls">    
                  <Suspense fallback={<div>Loading...</div>}>               
                    <EditListing
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      location={props.location}
                      day_rate={props.dayRate}
                    />
                    <CancelListing
                      id={props.id}
                      bike={`${props.make} ${props.model}`}
                      image_url={props.image}
                    />
                  </Suspense>
                </div>
            </div>    
        </Container>
    </>
  )
}

export default listingTile