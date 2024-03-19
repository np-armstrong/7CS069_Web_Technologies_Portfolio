import { Container, Row, Col } from "react-bootstrap"
import './footer.css'

function Footer(){

const date = new Date().getFullYear();
    
  return (
    <>
    <Container fluid className='footer-container'>
        <Row>
        <Col xs={12} md={4} className="column">
                <h4>Support</h4>
                <li><a href="">Help Centre</a></li>
                <li><a href="">FAQs</a></li> 
                <li><a href="">Contact Us</a></li> 
            </Col>
            <Col xs={12} md={4} className="column">
                <h4>Policies</h4>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li> 
            </Col>
            <Col xs={12} md={4} className="column">
                <h4>Resources</h4>
                <li>Icons by: <a href="https://icons8.com">Icons8</a></li>
                <li>Images by: <a href="https://pexels.com">pexels</a></li> 
                <li>CSS Backgrounds by: <a href="https://10015.io/tools/css-background-pattern-generator">10015</a></li>
            </Col>

        </Row>

        <div className="copyright">
            <p>&copy; {date} Ride On</p>
        </div>

    </Container>
    </>
  )
}

export default Footer