import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from '../bikeCard/BikeCard';
import './fleet.css';
import Spinner from 'react-bootstrap/Spinner';

//FIRST TODO: Turn the below into a map that will iterate through the bikes in the database and display them
//TODO: Create a modal that allows user to book a bike

const Fleet = () => {

  //State variable to hold the bikes
  const [bikes, setBikes] = useState([]);

  //Fetch the bikes from the database
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch('/api/bikes/'); //Uses the proxy in the package.json file to avoid CORS issues
        const data = await response.json();
        setBikes(Object.values(data));
      } catch (error) {
        console.error('Error fetching bikes:', error);
        // Handle errors (e.g., display an error message)
        //alert('Error fetching bikes', error);
      }
    };

    fetchBikes(); 
  }, []); 

  return (
    <Container className='fleet-container'>
        <Row>
            <Col>
                <h1>Our Fleet</h1>
            </Col>
        </Row>
        <hr/>
      <Row>
        {bikes[0] != null ? bikes[0].map((bike, index) => {
          return (  
            <Col key={index}>
              <BikeCard 
              location={"Nationwide"}
              key={index}
              make={bike.make}
              model={bike.model}
              engine={bike.engine}
              transmission={bike.transmission}
              url={bike.image_url}
              dayRate={bike.day_rate}
              />
            </Col>    
          )
        
        }) : 
        <div className='spinner-container'>
          <Spinner animation="border" variant="dark" size='xl' />
        </div>}
      </Row>
    </Container>
  );
}

export default Fleet;
