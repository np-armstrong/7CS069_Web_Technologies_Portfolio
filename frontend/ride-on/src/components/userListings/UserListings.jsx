import { Container, Row, Col } from "react-bootstrap";
import BikeCard from '../bikeCard/BikeCard';
import './userListings.css';

// Fake listings for use while building the UI
const bikes = [
    {
        id: 1,
        username: "user1",
        make: "Honda",
        model: "XR250",
        engine: 250,
        transmission: "Manual",
        image_url: "./assets/xr250.jpeg", 
        day_rate: 100,
    },
    {
        id: 2,
        username: "user2",
        make: "Yamaha",
        model: "YZ250",
        engine: 250,
        transmission: "Manual",
        image_url: "./assets/yz250.jpeg",
        day_rate: 120,
    },
    {
        id: 3,
        username: "user3",
        make: "Kawasaki",
        model: "KX250",
        engine: 250,
        transmission: "Manual",
        image_url: "./assets/kx250.png",
        day_rate: 150,
    }
];

function UserListings() {
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
        {bikes.map((bike, index) => {
          return (  
            <Col key={index}>
              <BikeCard 
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
          })}
        {/* // }) : 
        // <div className='spinner-container'>
        //   <Spinner animation="border" variant="dark" size='xl' />
        // </div>} */}
      </Row>
    </Container>

    </>
  )
}

export default UserListings