import React from 'react'
import './hero.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

// const Hero = () => {
//     return (
//         <>  
//                 <div className="heroContainer">
//                         <div className="heroBackground">
//                             <img src="./assets/moto.jpg" alt="" className="heroImg" />
//                         </div>
                        
//                         {/* <div className="heroCta">
//                             <h5 className="ctaHeading">Find Your Perfect Ride</h5>
//                         </div> */}

//                         <div className="heroTextContainer">
//                             <div className="heroText">                    
//                                 <h1 className='heading'>Embrace the Adventure</h1>
//                                 <h4 className='subheading'>Find the perfect bike for your next journey, hassle-free rentals from riders, for riders.</h4>
//                             </div>
//                         </div>

//                         {/* <div className="searchBar">
//                             <input type="text" className="searchInput" placeholder="Search for your next ride" />
//                             <button className="searchButton">Search</button>
//                         </div> */}
                        
//                 </div>
//         </>
//     )
// }

// export default Hero

const Hero = () => {
    return (
        <>  
                <Container fluid>
                    <Row>
                        <div className="heroBackground">
                            <img src="./assets/moto.jpg" alt="" className="heroImg" />
                        </div>
                        
                        {/* <div className="heroCta">
                            <h5 className="ctaHeading">Find Your Perfect Ride</h5>
                        </div> */}

                        <div className="heroTextContainer">
                            <div className="heroText">                    
                                <h1 className='heading'>Embrace the Adventure</h1>
                                <h4 className='subheading'>Find the perfect bike for your next journey, hassle-free rentals from riders, for riders.</h4>
                            </div>                        
                            <Button variant="light" size="lg" className="Sign Up">Sign Up</Button>

                        </div>

                        {/* <div className="searchBar">
                            <input type="text" className="searchInput" placeholder="Search for your next ride" />
                            <button className="searchButton">Search</button>
                        </div> */}
                    </Row>    
                </Container>
        </>
    )
}

export default Hero