import './hero.css';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';
import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/authProvider.js';

function Hero () {

    const auth = useAuth();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => { 
        if (auth.token === "") {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [auth.token])

    return (
        <>  
            <Container fluid className='heroContainer'> 
                <Row>        
                    <Col xs={11} md={5} lg={5} className='hero-text-column'>
                        <div className="text-container">
                            <h1>Embrace the <strong className='adventure'>Adventure</strong>.</h1>
                            <h4>Find the perfect bike for your next journey, <strong>hassle-free rentals from riders, for riders.</strong></h4>
                            {!isLoggedIn ? <Button 
                                variant="success" 
                                size="md" 
                                className="Sign Up"
                                href="/register"
                            >
                                Sign Up
                            </Button> : 
                            <div>
                                <p>Did you know you can rent out your motorcycle with Ride-On?</p>
                                <Button
                                    variant='outline-success'
                                    size='md'
                                    className='List-bike'
                                    href='/mylistings'
                                >
                                List My Hog!
                                </Button>
                            </div>}
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5} className='image-column'>
                        <Image src='../assets/rider-shape-3.webp' alt='Man riding motorcycle on beach' height="503px" width="495px" fluid/> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero