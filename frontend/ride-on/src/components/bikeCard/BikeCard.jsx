import React from 'react'
import './bikeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import { CurrencyDollar } from 'react-bootstrap-icons';
import { Router } from 'react-router-dom';
import CreateModal from '../createModal/CreateModal';

function BikeCard(props) {

  const make = props.make;
  const model = props.model;
  const engine = props.engine;
  const transmission = props.transmission;
  const dayRate = props.dayRate;
  const image = props.url;
  const userBike = props.userBike;
  // const key = props.key;

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  // }
  
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
            {/* <Button variant="dark" onClick={handleClick}>Hire</Button> */}
            <CreateModal
              make={make}
              model={model}
              engine={engine}
              transmission={transmission}
              dayRate={dayRate}
              image={image}
            />          
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default BikeCard;