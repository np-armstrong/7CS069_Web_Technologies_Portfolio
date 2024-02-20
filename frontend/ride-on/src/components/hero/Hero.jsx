import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <>  
                <div className="heroContainer">
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
                        </div>
                        
                </div>
        </>
    )
}

export default Hero