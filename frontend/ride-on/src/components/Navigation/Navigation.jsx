import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/authProvider';
import { useEffect, useState } from 'react';

function Navigation(props) {

  const auth = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(true); //Change to state variable later
  
  // This useEffect is used to check if the user is logged in or not
  useEffect(() => {
    if (auth.token === "") {
      setIsLoggedIn(false);
    } else {
      setUsername(auth.user);
      setIsLoggedIn(true);
    }
  }); 

  const [username, setUsername] = useState(""); 

  // This useEffect is used to check if the user is logged in or not and to get the username
  // useEffect(() => { 
  //   // 
  // })[isLoggedIn];

  let isBookings = props.isBookings;
  
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar fixed="top" key={expand} expand={expand} className="bg-body-tertiary mb-0">
          <Container fluid>
        {/* <div>
            <img src="/assets/moto-40.png" alt="" href="/" style={{ cursor: 'pointer' }} />
        </div> */}
        <div style={{ marginLeft: '10px' }}>
            <Navbar.Brand href="/">
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
                      title={`Hi, ${username}!`}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item 
                        href="/bookings">
                        My Bookings
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        My Listings
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item 
                        href="#action5"
                        onClick={auth.logoutAction}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      style={{ marginBottom: '5px' }}
                      title="Menu"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/login">
                        Login
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </Nav>
                {/* New button for listing bikes */}
                {isLoggedIn ? 
                <Button  
                  as={Link} 
                  to= "/"  // This needs to be configured when listings option available
                  variant="dark" 
                  style={{ marginRight: '10px', marginBottom: "5px"}}>
                  List My Bike
                </Button> : 
                  <Button 
                  as={Link} 
                  to="/register"
                  variant="dark" 
                  style={{ marginRight: '10px', marginBottom: "5px"}}>
                  Sign Up!
                </Button>
                }
                {/* Original code before decision to add bookings to dropdown */}
                {/* {isBookings ? 
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
                </Button>)} */}
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