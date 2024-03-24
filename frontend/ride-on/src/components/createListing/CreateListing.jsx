import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { Form, Col, Row, Image } from 'react-bootstrap'; 
import { useAuth } from '../../auth/authProvider.js';
import './createListing.css';
import '../createModal/createModal.css';

function CreateListing() {

  const [show, setShow] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('site') || '');
  const [validated, setValidated] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClose = () => {
    setData((prevData) => ({
      ...prevData,
      location: '',
      day_rate: 0
    }));
    setValidated(false);
    setSaved(false);
    setShow(false);
    window.location.reload();
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
            image_url: './assets/used-zoomer.webp'
          }));
          break;
        case "KTM 390 Duke":
          setData(prevData => ({
            ...prevData, 
            make: 'KTM',
            model: '390 Duke',
            engine: 390,
            transmission: 'Manual',
            image_url: './assets/black-duke2.webp'
          }));
          break;
        case "Honda XR250":
          setData(prevData => ({
            ...prevData, 
            make: 'Honda',
            model: 'XR250',
            engine: 250,
            transmission: 'Manual',
            image_url: './assets/xr250.webp'
          }));
          break;
        default:
          break;
    }
  }

  const username = localStorage.getItem('user');
    
  const [data, setData] = useState({
    username: username,
    location: '',
    make: 'Honda',
    model: 'Zoomer-x',
    engine: 110,
    transmission: 'Automatic',
    day_rate: 0,
    image_url: './assets/used-zoomer.webp'
  });

  useEffect(() => {
    if (data.location.length > 2 && data.day_rate > 0){
      return setValidated(true);
    } else {
      return setValidated(false);
    }
  });

  async function handleSubmit(){
    //checkValidation();
    if (validated){
      // console.log('data validated');
      // console.log(data);
      try{
        const response = await fetch('http://localhost:8000/api/user_listings/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok){
          console.log('Listing created');
          setSaved(true);
          // alert('Listing created');
        }
        return response;
      } catch (error){
          console.error('Error:', error);
          alert('Error creating listing, please try again.');
        }
    }else{
      alert('Invalid Entry: Please fill in all fields.');
    }
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
          {!saved ? <Modal.Body>
            <h3>Create Listing</h3>
            <div className="user-img-container">
              <Image src={data.image_url} roundedCircle className='user-listing-img'/>
            </div>
            <Form>
              <Form.Group controlId='validationCustom01' noValidate>
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  required
                  type="text" 
                  placeholder="Enter the city where your bike is kept."
                  onChange={handleLocationChange}
                  isValid={data.location.length > 2}
                  isInvalid={data.location.length === 0}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Location Required</Form.Control.Feedback>
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
              <Form.Group controlId='validationCustom02'>
                <Form.Label>Day Rate (£/day)</Form.Label>
                <Form.Control 
                  required="required"
                  type="integer" 
                  placeholder="Enter a daily rental fee in £"
                  onChange={handleDayRateChange}  
                  isValid={data.day_rate > 0}
                  isInvalid={data.day_rate === 0 || data.day_rate === '' || data.day_rate === null}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Day Rate Required.</Form.Control.Feedback>

                {/* TODO: Add validation */}
              </Form.Group>
            </Form>

          </Modal.Body> : <Modal.Body>
          <div className="booking-confirmation">
                    <div className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="green" className="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                    </div>
            </div>
            <h5 className='confirmed-message'>Listing Posted!</h5>
        </Modal.Body>}
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            {!saved && <Button type="submit" variant="success" onClick={handleSubmit}>
              Create Listing
            </Button>}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CreateListing