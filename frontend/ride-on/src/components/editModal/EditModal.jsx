import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// Once the data is fetched from the backend, the data will be passed to the EditModal component
// The EditModal component will be used to display the booking details and allow the user to edit the booking
// A PUT request will be sent to the backend to update the booking details

//Gets the current date to validate the inputted dates
let todaysDate = new Date(Date.now()).toISOString().slice(0,10);
let newStartDate = new Date();
let newEndDate = new Date();

function EditModal(props) {

    //State variable to show the modal
    const [show, setShow] = useState(false);

    //Functions to show and hide the modal
    const handleClose = () => {
        setShow(false);
        setValidated(); //Reset the validated state variables
        setValidatedEnd(); //Reset the validated state variables
    }
    const handleShow = () => setShow(true);

    //State variables to validate the inputted dates
    const[validated, setValidated] = useState();
    const[validatedEnd, setValidatedEnd] = useState();

    //Function to grab the data inputted in the start date field
    const handleStartDateChange = (e) => {

        let newStartDate = e.target.value;
        console.log(newStartDate);

        //Validate the inputted dates
        if(newStartDate <= todaysDate){
            setValidated(false); //If the date is in the past, set the validated state variable to false
        } else {
            setValidated(true); //If the date is in the future, set the validated state variable to true
        }
    }

    //This function grabs the data inputted in the end date field
    function handleEndDateChange(e) {
        let newEndDate = new Date(e.target.value);
    
        //Validate the inputted dates
        if(newEndDate <= newStartDate){
            setValidatedEnd(false); //If the date is before the start date, set the validated state variable to false
        } else {
            setValidatedEnd(true); //If the date is after the start date, set the validated state variable to true
        }
    }

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Edit
      </Button>


      <Modal 
        show={show} 
        onHide={handleClose} 
        animation={true}
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Booking Details</h5>
            <p>{`Bike: ${props.bike}`}</p>

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


        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;