import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './myListings.css'
import BikeCard from '../../components/bikeCard/BikeCard'
import BookingTile from '../../components/bookingTile/BookingTile'

const dummyData = [
    {
        id: 1,
        username: "JohnDoe",
        make: "Honda",
        model: "Winner-x",
        engine: 150,
        dayRate: 50,
        transmission: "Manual",
        image: "./assets/yz250.jpeg"
    },
    {
        id: 2,
        username: "JohnDoe",
        make: "Honda",
        model: "CBR-150",
        engine: 150,
        dayRate: 50,
        transmission: "Manual",
        image: "./assets/xr250.jpeg"
    },
]

function MyListings() {
  return (
    <>
        <Navigation/>
        <Container className='garage-header'>
        <div className="header">        
                <h1>My Garage</h1>
                <hr/>
            </div>

        </Container>
        <Container className='garage-container' fluid>
        <Row>
            <div className="carousel-container">
                <Carousel data-bs-theme="light" className='garage-slides'>
                    {dummyData.map((bike, index) => {
                        return (
                            <Carousel.Item key={index} className='carousel-item' interval={10000}>
                                <img
                                className="d-block w-100"
                                src={bike.image}
                                alt="First slide"
                                />
                                {/* <Carousel.Caption className='bike-information'>
                                <h6>{bike.make} {bike.model}</h6>
                                {/* <p>Engine: {bike.engine}cc</p>
                                <p>Transmission: {bike.transmission}</p>
                                <p>Day Rate: £{bike.dayRate}</p> 
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </Row>
        </Container>
        <Container className='my-listings-container'>
        <Row>

            <div className="edit-my-listings">
                <h2>Edit Listings</h2>
                <hr/>
                {dummyData.map((bike, index) => {
                    return(
                        <BookingTile key={index}
                            make={bike.make}
                            model={bike.model}
                            engine={bike.engine}
                            dayRate={bike.dayRate}
                            image={bike.image}
                        />
                    )
                })}
            </div>

        </Row>
        </Container> 
        <Container className='my-listings-container'>
            <div className="add-new-header">
                <h2>Add New Listing</h2>
                <hr/>
            </div>
            <div className="add-new-button">
                {/* TODO: Replace with a Modal */}
                <Button size='lg' className='listing-button' variant='outline-dark'>
                    New Listing
                </Button> 
            </div>
        </Container> 
    </>
  )
}

export default MyListings