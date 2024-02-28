import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from '../bikeCard/BikeCard';
import './fleet.css';

const Fleet = () => {
  return (
    <Container className='fleet-container'>
        <Row>
            <Col>
                <h1>Our Fleet</h1>
            </Col>
        </Row>
        <hr/>
      <Row>
      <Col>
            <BikeCard 
            make="Honda"
            model="Zoomer X"
            engine="110"
            transmission="Automatic"
            url="https://www.ncxhonda.com/motorcycles/storage/app/uploads/360/zoomer-x/009.jpg"
            dayRate="25"
            />
        </Col>
        <Col>  
            <BikeCard 
            make="Honda"
            model="Wave 110 S"
            engine="110"
            transmission="Semi-Automatic"
            url="https://yuhmak.vtexassets.com/arquivos/ids/185655-800-auto?v=638406683490070000&width=800&height=auto&aspect=true"
            dayRate="30"
           />
        </Col>
        <Col>
            <BikeCard 
            make="KTM"
            model="390 Duke"
            engine="390"
            transmission="Manual"
            url="https://wmr1.com/cdn/shop/files/ktm-390-duke-1.jpg?v=1707410892&width=1080"
            dayRate="85"
            />
        </Col>
        <Col>
            <BikeCard 
            make="Honda"
            model="CBR1000RR"
            engine="1000"
            transmission="Manual"
            url="https://frasermotorcycles.com.au/cdn/shop/products/HONDA_CBR1000RR-R_SP_2022_2_1200x.png?v=1651111375"
            dayRate="100"
            />
        </Col>
      </Row>
    </Container>
  );
}

export default Fleet;
