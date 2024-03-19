import React from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'; 
import './about.css';
 
function About(){
  return (
    <>
        <Container fluid className='aboutContainer'> 
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Image src='../assets/se-shape.png' alt='' className='motocross-image' fluid/>
                </Col>
                    
                <Col xs={12} md={6} lg={8} className='text-column'>
                    <div className="text-container">
                        <h2>By Riders, For Riders.</h2>
                        <p>
                            Ride On is a platform designed to connect motorcycle enthusiasts with the perfect bike for their next adventure. 
                            Our mission is to provide hassle-free rentals, from riders, for riders. 
                            Whether you're a seasoned rider or just starting out, we've got the perfect bike for you. 
                            Our platform is designed to make the rental process as easy as possible, so you can focus on the journey ahead.
                        </p>
                        <h6>Have a bike you want to rent out?</h6>
                        <Button 
                            variant="outline-success" 
                            size="md" 
                            className="Sign Up"
                            href="/"
                            >
                                List My Bike
                            </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About