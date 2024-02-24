import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './registrationForm.css'; // Add correct import statement for CSS file
import { Link } from 'react-router-dom'; 

const RegistrationForm = () => {

// // event handler to update variables based on input change
//   const handleInputChange = (event) = useState({

//   }) 

const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    checked: false,
});

const handleInputChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};

const handleCheckboxChange = (event) => {
    setFormData({
        ...formData,
        checked: event.target.checked,
    });
};
    

  return (
    <>
    <div className="registrationContainer">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
            
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
            Sign Up!
        </Button>
        <hr />
        <p>Already a member?</p> 
        <a href="/login">Login</a>
        </Form>
        
    </div> 
    </>
  )
}

export default RegistrationForm