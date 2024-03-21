import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './registrationForm.css'; // Add correct import statement for CSS file
import { useNavigate } from 'react-router-dom'; 

const RegistrationForm = () => {

    const navigate = useNavigate(); 

    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
    });

    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        //console.log(formData); 
    };

    function validateEmail(email) {
        const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; //SRC: https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/#:~:text=In%20the%20context%20of%20email,and%20efficiently%20validate%20user%20input. 
        return regex.test(email);
    }

    function validatePassword(password) {
        // This regex adds a layer of security to the password by requiring at least one uppercase letter, one lowercase letter, one number, and one special character. It also requires the password to be between 8 and 15 characters long.
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/; //SRC https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/
        return regex.test(password); 
    }

    function validateUsername(username) {
        const regex = /^[a-zA-Z0-9]{2,}$/; // requires at least 2 characters, can be letters or numbers
        return regex.test(username);
    }


    async function handleSubmit(e) {
        e.preventDefault();

        //Alerts for invalid entries
        if (!formData.username || !formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
        if(validateEmail(formData.email) === false) {
            alert('Invalid email');
            return;
        }
        if(validatePassword(formData.password) === false) {
            alert('Invalid password');
            return;
        }
        if(validateUsername(formData.username) === false) {
            alert('Invalid username');
            return;
        }

        console.log(formData);
        // TODO: This applies to all api requests, the bad response code and message is not being handled correctly. 
        // Possible options: Research further implementation of fetch API, or use axios.

        try {
            const response = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            //!! TODO !!//
            //Add check for bad response code for error handling -- check the loginAction function in authProvider.js for reference

            // if (!response.ok) {
            //     // const errorData = await response.json();

            //     // console.error('Error:' , errorData.message);

            //     throw new Error(`API request failed with status ${response.status}`);
            // }

            const responseData = await response.json();
            console.log(responseData);
            alert('You have successfully registered! Please log in to continue.');
            navigate('/login'); 

         
        } catch (error) {

            if(error.response?.status === 422){
                console.error('Error:', error.message);
                alert('Username or email already exists. Please try again.');
                return;
            }

            console.error('Error:', error.message);
            alert('An error occurred. Please try again later.');
        }
    }

  return (
    <>
        <Container className='registrationContainer'>
            <Row>
                <Form className='registrationForm'>
                <h4>Sign Up!</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        name="username"
                        isValid={formData.username.length > 3}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                    
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        isValid={validateEmail(formData.email)} // validation for email
                        onChange={handleInputChange}
                        
                    />
                    <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"     
                        placeholder="Password" 
                        name="password"
                        isValid={validatePassword(formData.password)} // validation for password
                        isInvalid={formData.password.length < 8} 
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button 
                    variant="dark" 
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign Up!
                </Button>
                <hr />
                <p>Already a member?</p> 
                <a href="/login">Login</a>
                </Form>
            </Row>
        </Container>
    </>
  )
}

export default RegistrationForm