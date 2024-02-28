import './hero.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

function Hero () {
    return (
        <>  
                <Container fluid>
                    <Row>
                        <div className="heroBackground">
                            <img src="./assets/moto.jpg" alt="Picture of motorcyclist riding through the mountains" className="heroImg" />
                        </div>
                        

                        <div className="heroTextContainer">
                            <div className="heroText">                    
                                <h1 className='heading'>Embrace the Adventure</h1>
                                <h4 className='subheading'>Find the perfect bike for your next journey, hassle-free rentals from riders, for riders.</h4>
                            </div>                        
                            <Button variant="light" size="lg" className="Sign Up">Sign Up</Button>

                        </div>

                    </Row>    
                </Container>
        </>
    )
}

export default Hero