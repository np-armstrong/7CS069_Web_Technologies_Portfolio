import React, { Suspense } from 'react'
import './bikeCard.css'
import Card from 'react-bootstrap/Card';

//lazy loading of the modal
const CreateModal = React.lazy(() => import('../createModal/CreateModal'));

function BikeCard(props) {

  const make = props.make;
  const model = props.model;
  const engine = props.engine;
  const transmission = props.transmission;
  const dayRate = props.dayRate;
  const image = props.url;
  const userBike = props.userBike;
  
    return (
      <div className='bike-card'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.url} className='cardImg'/>
          <Card.Body>
            <Card.Title>{`${props.make} ${props.model}`}</Card.Title>
            {userBike ? <Card.Text>Owned by: {props.owner}</Card.Text> : null}
            <div className="stats-container">
                <div className='bike-stats'>
                  <img src="./assets/icons/location.png"/>
                  <li className='bike-stat'>{`${props.location}`}</li>
                </div>
                <div className='bike-stats'>
                  <img src="./assets/icons/engine.png"/>
                  <li className='bike-stat'>{`${props.engine} cc`}</li>
                </div>
                <div className='bike-stats'>
                  <img src="./assets/icons/gearbox-64.png"/>
                  <li className='bike-stat'>{props.transmission}</li>
                </div>
                <div className='bike-stats'>
                  <img src="./assets/icons/dollar.png"/>
                  <li className='bike-stat'>{`£${props.dayRate}/day`}</li>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>         
              <CreateModal
                make={make}
                model={model}
                engine={engine}
                transmission={transmission}
                dayRate={dayRate}
                image={image}
              />          
            </Suspense>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default BikeCard;