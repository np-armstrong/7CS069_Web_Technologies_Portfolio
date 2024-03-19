import './hero.css';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';

function Hero () {

    return (
        <>  
            <Container fluid className='heroContainer'> 
                <Row>        
                    <Col xs={11} md={5} lg={5} className='hero-text-column'>
                        <div className="text-container">
                            <h1>Embrace the <strong className='adventure'>Adventure</strong>.</h1>
                            <h4>Find the perfect bike for your next journey, <strong>hassle-free rentals from riders, for riders.</strong></h4>
                            <Button 
                                variant="success" 
                                size="md" 
                                className="Sign Up"
                                href="/register"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5} className='image-column'>
                        <Image src='../assets/rider-shape-3.png' alt='' className='motocross-image' fluid/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Hero