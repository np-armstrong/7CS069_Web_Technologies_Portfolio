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
                <li><a href="">More Support</a></li> 
                <li><a href="">Even More Support</a></li> 
            </Col>
            <Col xs={12} md={4} className="column">
                <h4>Policies</h4>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li> 
            </Col>
            <Col xs={12} md={4} className="column">
                <h4>Resources</h4>
                {/* <li><a target="_blank" href="https://icons8.com/icon/G7xxWUssqjYw/us-dollar-circled">Us Dollar Circled</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
                <li><a target="_blank" href="https://icons8.com/icon/9376/engine">Engine</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
                <li><a target="_blank" href="https://icons8.com/icon/112254/gearbox">Gearbox</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li> */}
                <li>Icons by: <a href="https://icons8.com"></a>Icons8</li>
                <li>Images by: <a href="https://pexels.com">pexels</a></li> 
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