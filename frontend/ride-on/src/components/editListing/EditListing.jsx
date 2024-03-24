import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../auth/authProvider.js';

function EditListing(props, {refreshKey, setRefreshKey}){
    const [show, setShow] = useState(false);
    const [saved, setSaved] = useState(false);
    const [validated, setValidated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('site') || '');

    useEffect(() => {
      if(data.location.length > 2 && data.day_rate > 0){
        setValidated(true);
      } else {
        setValidated(false);
      }
    });

    const handleClose = () => {
      setShow(false);
      setSaved(false);
      window.location.reload();
    };

    const handleShow = () => {
      setShow(true)
    };
    
    const[data, setData] = useState({
      location: props.location,
      image_url: props.image_url,
      day_rate: props.day_rate
    }); 

    function handleNewLocation(e){
      setData((prevData) => ({
        ...prevData,
        location: e.target.value
      }));
    };

    function handleNewRate(e){
      if(e.target.value !== NaN){
      let dayRate = parseInt(e.target.value);
      setData((prevData) => ({
        ...prevData,
        day_rate: dayRate
      }));
    }};

    async function handleSubmit(e){
      e.preventDefault();
      if(validated){  
        try{
          const response = await fetch(`http://localhost:8000/api/user_listings/${props.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)});
            const responseJson = await response.json();
            if(response.ok){
              console.log('Successfully sent data: ', responseJson);
              setSaved(!saved);
            }
            return responseJson;
        } catch(error){
          console.error('Error:', error);
        }
      } else {
        alert('Invalid Entry: Please fill in all fields.');
      }
    }

    return (
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit My: {props.bike}</Modal.Title>
          </Modal.Header>
          {!saved ? <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter location" 
                  value={data.location}
                  onChange={handleNewLocation}
                  isValid={data.location.length > 2}
                  isInvalid={data.location.length === 0}  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Location Required</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicDayRate">
                <Form.Label>Day Rate (£/day)</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Enter day rate" 
                  value={data.day_rate}
                  onChange={handleNewRate}
                  isValid={data.day_rate > 0}
                  isInvalid={data.day_rate === 0 || data.day_rate === '' || data.day_rate === null}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Day Rate Required.</Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body> : 
          <Modal.Body>
              <div className="booking-confirmation">
                <div className="check">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="green" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg>
                </div>
              </div>
              <h5 className='confirmed-message'>Listing Updated!</h5>
          </Modal.Body>}
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            {!saved && <Button variant="success" onClick={handleSubmit}>
              Save Changes
            </Button>}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default EditListing