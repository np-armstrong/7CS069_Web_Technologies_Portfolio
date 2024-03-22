import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './myListings.css'
import BikeCard from '../../components/bikeCard/BikeCard'
import ListingTile from '../../components/listingTile/ListingTile.jsx'
import CreateListing from '../../components/createListing/CreateListing.jsx'

function MyListings() {

    const[listings, setListings] = useState([])
    const[token, setToken] = useState(localStorage.getItem('site') || "");
    const[user, setUser] = useState(localStorage.getItem('user') || "");

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/userlistings/${user}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                });
                const data = await response.json();
                setListings(Object.values(data));
            } catch (error) {
                console.error('Error fetching listings:', error);
                //alert('Error fetching listings', error);
            }
        };
        fetchListings();
    }, []);

    return (
        <>
            {/* TODO: Add a prop to navigation to remove the list my bike from this page */}
            <Navigation 
                isListings={true}
            /> 
            <Container className='garage-header'>
            <div className="header">        
                <h1>My Garage</h1>
                <p>Here you will find bikes you have listed as available for rental!</p>
                <hr/>
            </div>
            </Container>
            <Container className='my-listings-container'>
            <Row>

                <div className="edit-my-listings">
                    {listings.length !== 0 ? listings.map((bike, index) => {
                        return(
                            <ListingTile key={index}
                                id={bike.id}
                                location={bike.location}
                                make={bike.make}
                                model={bike.model}    
                                dayRate={bike.day_rate}
                                image={bike.image_url}
                            />
                        )
                    }): 
                        <div className='no-listings'>
                            <h6>You have no listings currently.</h6>
                        </div>
                    }
                </div>
            </Row>
            </Container> 
            <Container className='my-listings-container'>
                <div className="add-new-header">
                    <h2>Add New Listing</h2>
                    <hr/>
                </div>
                <div className="add-new-button">
                    <CreateListing className="add-new-button"/>
                </div>
            </Container> 
        </>
    )
    }

export default MyListings