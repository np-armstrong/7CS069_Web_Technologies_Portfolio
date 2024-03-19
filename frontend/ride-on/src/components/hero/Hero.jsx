import './hero.css';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';


function Hero () {



    return (
        <>  
                {/* <Container fluid={true}>
                    <Row>
                        <div className="heroBackground">
                            <Image src="./assets/moto.jpg" alt="Picture of motorcyclist riding through the mountains" className="heroImg" />
                        </div>
                        

                        <div className="heroTextContainer">
                            <div className="heroText">                    
                                <h1 className='heading'>Embrace the Adventure</h1>
                                <h4 className='subheading'>Find the perfect bike for your next journey, hassle-free rentals from riders, for riders.</h4>
                            </div>                        
                            <Button 
                                variant="light" 
                                size="lg" 
                                className="Sign Up"
                                as={Link}
                                to="/register"
                                >
                                    Sign Up
                                </Button>

                        </div>

                    </Row>    
                </Container> */}
            <Container fluid className='heroContainer'> 
                <Row>        
                    <Col xs={11} md={6} lg={6} className='hero-text-column'>
                        <div className="text-container">
                            <h1>Embrace the Adventure.</h1>
                            <h3>Find the perfect bike for your next journey, hassle-free rentals from riders, for riders.</h3>
                            <Button 
                                variant="success" 
                                size="md" 
                                className="Sign Up"
                                href="/"
                                >
                                    Sign Up
                                </Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5} className='image-column'>
                        <Image src='../assets/se-shape.png' alt='' className='motocross-image' fluid/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Hero