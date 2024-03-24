import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Form } from 'react-bootstrap';
import './editModal.css';

const todaysDate = new Date(Date.now()).toISOString().slice(0,10);

export default function EditModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => { 
        setShow(false); 
        setValidated();
        setValidatedEnd();
        setSaved(false);
        window.location.reload();   
    }
    const handleShow = () => setShow(true);

    
    const[validated, setValidated] = useState(true);
    const[validatedEnd, setValidatedEnd] = useState(true);
    const[newStartDate, setNewStartDate] = useState(props.startDate);
    const[newEndDate, setNewEndDate] = useState(props.endDate);
    const[totalCost, setTotalCost] = useState(props.total);
    const[saved, setSaved] = useState(false);

    //Variables to hold data for POST request
    const make = props.make;
    const model = props.model;
    const currentDayRate = props.dayRate;
    const image = props.image;
    const id = props.id;

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

    useEffect(() => {  
        setData(prevData => ({
            ...prevData,
            total: totalCost
        }));
    }, [totalCost]);

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
        make: make,
        model: model,
        start_date: newStartDate, 
        end_date: newEndDate,    
        day_rate: currentDayRate,
        image_url: image,
        total: totalCost
    }); 

    function calculateTotalCost(startDate, endDate, currentDayRate){

        const date1 = new Date(startDate).getDate(); 
        const date2 = new Date(endDate).getDate();
            
        const total = (date2 - date1) * currentDayRate;

        return total; 
    }

    useEffect(() => {
        setTotalCost(calculateTotalCost(newStartDate, newEndDate, currentDayRate));
    }, [newStartDate, newEndDate]);

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            total: totalCost
        }));
    }, [totalCost]);

    const [token, setToken] = useState(localStorage.getItem('site') || "");

    //POST request to create a booking
    async function postData(url, data) {
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
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
        postData(`http://localhost:8000/api/bookings/${id}`, data)
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
      <Button variant="outline-dark" onClick={handleShow}>
        Edit 
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modify your booking.</Modal.Title>
        </Modal.Header>
        {!saved ? <Modal.Body>
        <div className="form-container">
            <div className="bike-details-container">
                <div className="bike-title">
                    <h5>{props.bike}</h5>
                </div>
                <hr/>
            </div>

            <div className="date-container">

                <Form noValidate validated={validated}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            defaultValue={newStartDate} 
                            onChange={(e) => setNewStartDate(e.target.value)}
                            isInvalid={validated === false}
                            isValid={validated === true}
                        />
                        <Form.Control.Feedback type='invalid'>Date cannot be in the past!</Form.Control.Feedback> {/* Displays error message for invalid input */}
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback> {/* Displays valid message for invalid input */}
                    </Form.Group>
                </Form>

                <Form noValidate validated={validatedEnd}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            defaultValue={newEndDate} 
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
                {validated && validatedEnd ? <h5>Total Cost: ${data.total}</h5> : <h5>Total Cost: $0</h5>}
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
            <h5 className='confirmed-message'>Booking Updated!</h5>
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

