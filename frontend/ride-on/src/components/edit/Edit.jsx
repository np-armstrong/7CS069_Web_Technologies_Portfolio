import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Feedback from 'react-bootstrap/esm/Feedback';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

// Once the data is fetched from the backend, the data will be passed to the EditModal component
// The EditModal component will be used to display the booking details and allow the user to edit the booking
// A PUT request will be sent to the backend to update the booking details

//Gets the current date to validate the inputted dates
let todaysDate = new Date(Date.now());
let newStartDate = new Date();
let newEndDate = new Date();
 
function EditModal(props) {

    function handleClick() {
        props.onHide();
        console.log("Confirm Button Clicked");
    }
    
    //This state is used to validate the inputted dates
    const[validated, setValidated] = useState(false);
    const[validatedEnd, setValidatedEnd] = useState(false);

    //This function grabs the data inputted in the start date field
    const handleStartDateChange = (e) => {

        let newStartDate = new Date(e.target.value);

        //Validate the inputted dates
        if(newStartDate <= todaysDate){
            setValidated(false);
            console.log("Start Date cannot be in the past");
        } else {
            setValidated(true);
            console.log("Today's Date: ", todaysDate)
            console.log("Start Date: ", newStartDate);
        }
    }
    //This function grabs the data inputted in the end date field
    function handleEndDateChange(e) {
        let newEndDate = new Date(e.target.value);

        //Validate the inputted dates
        if(newEndDate <= newStartDate){
            setValidatedEnd(false);
            console.log("End date cannot be before the start date");
        } else {
            setValidatedEnd(true);
            console.log("End Date: ", newEndDate);
        }
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.bike}</h4>
        {/* This is the Start date field */}
        <Form noValidate validated={validated}>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
                required
                type="date"
                defaultValue={todaysDate} //-- Need to pass saved date here
                onChange={handleStartDateChange}
                isInvalid={validated === false}
                isValid={validated === true}
            />
            <Form.Control.Feedback type='invalid'>Date cannot be in the past!</Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form>

        {/* This is the end date field */}
        <Form noValidate validated={validatedEnd}>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
                required
                type="date"
                defaultValue={todaysDate} //-- Need to pass saved date here
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
        <Button 
        variant="outline-success" 
        onClick={handleClick}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
