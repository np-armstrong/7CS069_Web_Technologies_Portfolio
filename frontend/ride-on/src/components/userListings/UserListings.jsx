import { Container, Row, Col } from "react-bootstrap";
import BikeCard from '../bikeCard/BikeCard';
import './userListings.css';
import { useState, useEffect } from 'react';
import Spinner from "react-bootstrap/Spinner";

// Fake listings for use while building the UI
// const bikes = [
//     {
//         id: 1,
//         username: "Dave86",
//         location: "Wolverhampton",
//         make: "Honda",
//         model: "XR250",
//         engine: 250,
//         transmission: "Manual",
//         image_url: "./assets/xr250.jpeg", 
//         day_rate: 100,
//     },
//     {
//         id: 2,
//         username: "PhilBiker24",
//         location: "Manchester",
//         make: "Yamaha",
//         model: "YZ250",
//         engine: 250,
//         transmission: "Manual",
//         image_url: "./assets/yz250.jpeg",
//         day_rate: 120,
//     },
//     {
//         id: 3,
//         username: "DanTheMan",
//         location: "Nottingham",
//         make: "Kawasaki",
//         model: "KX250",
//         engine: 250,
//         transmission: "Manual",
//         image_url: "./assets/kx250.png",
//         day_rate: 150,
//     }
// ];

function UserListings() {

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user_listings/'); //Uses the proxy in the package.json file to avoid CORS issues
        const data = await response.json();
        // console.log(data);
        setBikes(Object.values(data));
      } catch (error) {
        console.error('Error fetching user listings:', error);
        // Handle errors (e.g., display an error message)
        //alert('Error fetching user listings', error);
      }
    };

  fetchBikes(); 
  }, []); 

  return (
    <>
      <Container className='fleet-container'>
        <Row>
            <Col>
                <h1>Bikes Listed by Other Riders!</h1>
                <p>Browse and Book bikes listed by our users.</p>
            </Col>
        </Row>
        <hr/>
      <Row>
        {bikes[0] != null ? bikes[0].map((bike, index) => {
          return (  
            <Col key={index}>
              <BikeCard 
              key={index}
              userBike={true}
              owner={bike.username}
              location={bike.location} 
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

    </>
  )
}

export default UserListings