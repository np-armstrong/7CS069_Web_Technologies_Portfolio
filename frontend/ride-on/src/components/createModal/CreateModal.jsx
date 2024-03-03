import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Form, Container } from 'react-bootstrap';
import './createModal.css';


function CreateModal(props) {
    const todaysDate = new Date(Date.now()).toISOString().slice(0,10);

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
    const[newStartDate, setNewStartDate] = useState(todaysDate);
    const[newEndDate, setNewEndDate] = useState(todaysDate);
    //Cost
    const[totalCost, setTotalCost] = useState(0);
    //Saved
    const[saved, setSaved] = useState(false);

    //Variables to hold data for POST request
    const username = 'user 1'; //This will be changed to the logged in user's username
    const make = props.make;
    const model = props.model;
    let startDate = '2024-03-08';//newStartDate; //Inputs unhooked at the moment while getting post request working
    let endDate = '2024-03-10'; //newEndDate;
    const dayRate = props.dayRate;


    //!! POST REQUEST WORKED, BUT NEED TO GET THE DATA FROM THE INPUTS !!
    const[data, setData] = useState({
        username: 'user1',
        make: 'Honda',
        model: 'Dream',
        start_date: '2024-03-08', 
        end_date: '2024-03-10',    
        day_rate: 30
    }); //This will hold the data from the POST request [NOT WORKING YET
    
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
          return responseJson; // Handle successful response
        } catch (error) {
          console.error('Error:', error);
          // Handle errors (e.g., display an error message to the user)
        }
      }
    

    //!!VALIDATION IS NOT WORKING PROPERLY!!
    //Handle the change of the start date
    const handleStartDateChange = (e) => {
        setNewStartDate(e.target.value);
        console.log(`Todays date: ${todaysDate}`)
        //Validate the inputted dates
        if(newStartDate <= todaysDate){
            console.log(`Start date: ${newStartDate}`);
            setValidated(false); //If the date is in the past, set the validated state variable to false
        } else {
            console.log(`Start date: ${newStartDate}`);
            setValidated(true); //If the date is in the future, set the validated state variable to true
        }
    }

    const handleEndDateChange = (e) => {
        setNewEndDate(e.target.value);
        console.log(`End date: ${newEndDate}`);
    
        //Validate the inputted dates
        if(newEndDate <= newStartDate){
            setValidatedEnd(false); //If the date is before the start date, set the validated state variable to false
        } else {
            setValidatedEnd(true); //If the date is after the start date, set the validated state variable to true
        }
    }

    //Handle the save button
    function handleSave() {
        postData('/api/bookings/', data)
        .then(responseData => {
            console.log('Successfully sent data: ', responseData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        setSaved(!saved);
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
                    {/* <p>{`Engine: ${props.engine} cc`}</p>
                    <p>{`Transmission: ${props.transmission}`}</p>
                    <p>{`Day Rate: $${props.dayRate}/day`}</p> */}
                </div>
            </div>

            <div className="date-container">

                {/* This is the Start date field */}
                <Form noValidate validated={validated}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            defaultValue={props.startDate} 
                            onChange={handleStartDateChange}
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
                            required
                            type="date"
                            defaultValue={props.endDate} 
                            onChange={handleEndDateChange}
                            isInvalid={validatedEnd === false}
                            isValid={validatedEnd === true}
                        />
                        <Form.Control.Feedback type='invalid'>Date cannot be before the start date.</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                </Form>

            </div>

            <div className="total-cost">
                <h5>Total Cost: $100</h5>
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