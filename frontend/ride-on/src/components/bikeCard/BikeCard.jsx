import React from 'react'
import './bikeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CurrencyDollar } from 'react-bootstrap-icons';
import { Router } from 'react-router-dom';

function BikeCard(props) {

  const make = props.make;
  const model = props.model;
  const engine = props.engine;
  const transmission = props.transmission;
  const dayRate = props.dayRate;
  const image = props.url;

  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  
    return (
      <div className='bike-card'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.url} />
          <Card.Body>
            <Card.Title>{`${props.make} ${props.model}`}</Card.Title>
            <div className="stats-container">
                <div className='bike-stats'>
                  <img src="./assets/icons/engine.png"/>
                  <li className='bike-stat'>{`${props.engine}cc`}</li>
                </div>
                <div className='bike-stats'>
                  <img src="./assets/icons/gearbox-64.png"/>
                  <li className='bike-stat'>{`${props.transmission}cc`}</li>
                </div>
                <div className='bike-stats'>
                  <img src="./assets/icons/dollar.png"/>
                  <li className='bike-stat'>{`$${props.dayRate}/day`}</li>
              </div>
            </div>          
            <Button variant="dark" onClick={handleClick}>Hire</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default BikeCard;