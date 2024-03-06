import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Form, Container } from 'react-bootstrap';
import './createModal.css';

const todaysDate = new Date(Date.now()).toISOString().slice(0,10);

function CreateModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => { 
        setShow(false); 
        setValidated();
        setValidatedEnd();
        setSaved(false);
    }
    const handleShow = () => setShow(true);

    //Validation 
    const[validated, setValidated] = useState();
    const[validatedEnd, setValidatedEnd] = useState();
    //Dates
    const[newStartDate, setNewStartDate] = useState();
    const[newEndDate, setNewEndDate] = useState();
    //Cost
    const[totalCost, setTotalCost] = useState(0);
    //Saved
    const[saved, setSaved] = useState(false);

    //Variables to hold data for POST request
    const username = 'user'; //This will be changed to the logged in user's username
    const make = props.make;
    const model = props.model;
    const dayRate = props.dayRate;
    const image = props.image;


    //Use effect to update the data when the start date changes
    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            start_date: newStartDate
        }));
    }, [newStartDate]);

    //Use effect to update the data when the end date changes
    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            end_date: newEndDate
        }));
        }, [newEndDate]);

    //useEffect used to validate the start date
    useEffect(() => {
        if(newStartDate >= todaysDate){
            setValidated(true);
        } else {
            setValidated(false);
        }
    }, [newStartDate]);

    //useEffect used to validate the end date
    useEffect(() => {
        if(newEndDate > newStartDate){
            setValidatedEnd(true);
        } else {
            setValidatedEnd(false);
        }
    }, [newEndDate]);

    //Sets the data for the POST request
    const[data, setData] = useState({
        username: username,
        make: make,
        model: model,
        start_date: newStartDate, 
        end_date: newEndDate,    
        day_rate: dayRate,
        image_url: image,
        total: totalCost
    }); 
    
    //!! Need to find the Total function and add it here !!
    //Function to calculate the total cost of the booking -- This appears to work fine, test with jest!
    function calculateTotalCost(startDate, endDate, dayRate){

            //Convert the dates to a date object
        const date1 = new Date(startDate).getDate(); 
        const date2 = new Date(endDate).getDate();
            
        const total = (date2 - date1) * dayRate;
        
        return total; 
    }

    useEffect(() => {
        setTotalCost(calculateTotalCost(newStartDate, newEndDate, dayRate));
    }, [newStartDate, newEndDate]);

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            total: totalCost
        }));
    }, [totalCost]);

    //POST request to create a booking
    async function postData(url, data) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
      
          const responseJson = await response.json();
          return responseJson; // Returns the new booking object
          
        } catch (error) {
          console.error('Error:', error);
          alert('Error creating booking:', error);
        }
        
    }

    //Handle the save button
    function handleSave() {
        if(validated && validatedEnd){
        postData('/api/bookings/', data)
        .then(responseData => {
            console.log('Successfully sent data: ', responseData);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error creating booking:', error);
        });
        // console.log(JSON.stringify(data));
        setSaved(!saved);
        }else{
            alert('Please enter valid dates');
        }
    }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Book Now!
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Booking</Modal.Title>
        </Modal.Header>
        {!saved ? <Modal.Body>
        <div className="form-container">
            <div className="bike-details-container">
                <div className="bike-title">
                    <h5>{`${props.make} ${props.model}`}</h5>
                </div>
                <div className="bike-image">
                    <img src={props.image}/>
                </div>
                <div className="bike-details">
                    <div className="bike-detail">
                        <img src="./assets/icons/engine.png"/>
                        <p>{`${props.engine} cc`}</p>
                    </div>
                    <div className="bike-detail">
                        <img src="./assets/icons/gearbox-64.png"/>
                        <p>{`${props.transmission}`}</p>
                    </div>
                    <div className="bike-detail">
                        <img src="./assets/icons/dollar.png"/>
                        <p>{`$${props.dayRate}/day`}</p>
                    </div>
                </div>
            </div>

            <div className="date-container">

                {/* This is the Start date field */}
                <Form noValidate validated={validated}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            data-testid="start-date" // This is the data-testid attribute for the test file to capture
                            required
                            type="date"
                            defaultValue={todaysDate} 
                            onChange={(e) => setNewStartDate(e.target.value)}
                            isInvalid={validated === false}
                            isValid={validated === true}
                        />
                        <Form.Control.Feedback type='invalid'>Date cannot be in the past!</Form.Control.Feedback> {/* Displays error message for invalid input */}
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback> {/* Displays valid message for invalid input */}
                    </Form.Group>
                </Form>

                {/* This is the end date field */}
                <Form noValidate validated={validatedEnd}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            data-testid="end-date" // This is the data-testid attribute for the test file to capture
                            required
                            type="date"
                            defaultValue={todaysDate} 
                            onChange={(e) => setNewEndDate(e.target.value)} 
                            isInvalid={validatedEnd === false}
                            isValid={validatedEnd === true}
                        />
                        <Form.Control.Feedback type='invalid'>Date cannot be before or on the start date.</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                </Form>
            </div>

            <div className="total-cost">
                {validated && validatedEnd ? <h5 data-testid='total'>Total Cost: ${totalCost}</h5> : <h5 data-testid='invalid-total'>Total Cost: $0</h5>}
            </div>
        </div>
        </Modal.Body> : 
        // This will display a message to tell the user the booking is created
        <Modal.Body>
            <div className="booking-confirmation">
                    <div className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="green" className="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                    </div>
            </div>
            <h5 className='confirmed-message'>Booking Confirmed!</h5>
        </Modal.Body>
        }
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!saved && <Button variant="outline-success" onClick={handleSave}>
            Confirm Booking
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;