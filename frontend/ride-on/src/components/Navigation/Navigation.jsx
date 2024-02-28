import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Navigation(props) {

  let isLoggedIn = true; 
  let isBookings = props.isBookings;

  if (isBookings) {
    console.log("Bookings True");
  }

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar fixed="top" key={expand} expand={expand} className="bg-body-tertiary mb-0">
          <Container fluid>
        {/* <div>
            <img src="/assets/moto-40.png" alt="" href="/" style={{ cursor: 'pointer' }} />
        </div> */}
        <div style={{ marginLeft: '10px' }}>
            <Navbar.Brand href="#">
                <img src="/assets/rideon.png" alt="" href="/" style={{ cursor: 'pointer', height:"40px", marginRight: "10px"}} />
                {/* RideOn */}
            </Navbar.Brand>
        </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}
                  {isLoggedIn ? (
                    <NavDropdown
                      style={{ marginBottom: '5px' }}
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action4">
                        My Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      style={{ marginBottom: '5px' }}
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/login">
                        Login
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </Nav>
                {isBookings ? 
                (<Button 
                  as={Link} 
                  to={"/"} 
                  variant="dark" 
                  style={{ marginRight: '10px', marginBottom: "5px"}}>
                  Home
                </Button>
                ) : (<Button 
                  as={Link} 
                  to={isLoggedIn ? "/bookings" : "/register"} 
                  variant="dark" 
                  style={{ marginRight: '10px', marginBottom: "5px"}}>
                  Manage Bookings
                </Button>)}
                <NavDropdown.Divider />
                {/* <Button as={Link} to=""variant="outline-dark" style={{ marginRight: '10px', marginBottom: "5px" }}>Rent out your bike!</Button> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;