import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { Form, Col, Row, Image } from 'react-bootstrap'; 
import { useAuth } from '../../auth/authProvider.js';
import './createListing.css';


function CreateListing() {

  const [show, setShow] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false)
  };

  const auth = useAuth();

  function handleShow(){
    if (auth.token === ""){
      window.location.href = "/register";
    } else {
      setShow(true);
    }
      
  }

  function handleLocationChange(e){
    setData(prevData => ({
      ...prevData,
      location: e.target.value
    }));
  }

  function handleDayRateChange(e){
    let dayRate = parseInt(e.target.value);
    console.log("Day rate: ", dayRate);
    console.log(typeof(dayRate));
    setData(prevData => ({
      ...prevData,
      day_rate: dayRate
    }));
  }

  function setBike(e){
    let selectedBike = e.target.value;
    console.log("Selected bike: ", selectedBike);
    console.log(typeof(selectedBike));
      switch(selectedBike){
        case "Honda Zoomer-x":
          setData(prevData => ({
            ...prevData, 
            make: 'Honda',
            model: 'Zoomer-x',
            engine: 110,
            transmission: 'Automatic',
            image_url: './assets/used-zoomer.jpeg'
          }));
          break;
        case "KTM 390 Duke":
          setData(prevData => ({
            ...prevData, 
            make: 'KTM',
            model: '390 Duke',
            engine: 390,
            transmission: 'Manual',
            image_url: './assets/duke2.jpg'
          }));
          break;
        case "Honda XR250":
          setData(prevData => ({
            ...prevData, 
            make: 'Honda',
            model: 'XR250',
            engine: 250,
            transmission: 'Manual',
            image_url: './assets/xr250.jpeg'
          }));
          break;
        default:
          break;
    }
  }

  const username = localStorage.getItem('user');
    
  const [data, setData] = useState({
    username: username,
    location: 'Wolverhampton',
    make: 'Honda',
    model: 'Zoomer-x',
    engine: 110,
    transmission: 'Automatic',
    day_rate: 25,
    image_url: 'https://images.khmer24.co/23-06-06/690902-honda-zoomer-x-2020-1686055428-13672738-b.jpg'
  });



  function handleSubmit(){
    console.log(data);
  }

  return (
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          New Listing
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Create Listing</h3>
            <div className="user-img-container">
              <Image src={data.image_url} roundedCircle className='user-listing-img'/>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Location"
                  onChange={handleLocationChange}
                />
                {/* TODO: Add validation */}
              </Form.Group>
              <Form.Group>
                <Form.Label>Select your bike</Form.Label>
                <Form.Control as="select" onChange={setBike}>
                  <option>Honda Zoomer-x</option>
                  <option>KTM 390 Duke</option>
                  <option>Honda XR250</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Day Rate (£/day)</Form.Label>
                <Form.Control 
                  required="required"
                  type="integer" 
                  placeholder="Enter a daily rental fee in £"
                  onChange={handleDayRateChange}  
                />
                {/* TODO: Add validation */}
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="success" onClick={handleSubmit}>
              Create Listing
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CreateListing