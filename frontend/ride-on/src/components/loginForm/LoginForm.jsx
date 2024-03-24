import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import './loginForm.css';
import { useState } from 'react';
import { useAuth } from '../../auth/authProvider';

function LoginForm() {

  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  
  const auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    if(input.username !== "" && input.password !== "") {
        auth.loginAction(input);
        return;
    }
    alert('Please provide a valid username and password');
  };

  function handleInputChange(event) {
    setInput((prev) =>({
      ...prev,
      [event.target.name]: event.target.value
    }));
    // console.log(input);
  }

  //src: https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5

  return (
    <Container className='loginContainer'>
      <Row>
        <Form className='loginForm'>
          <h4>Login</h4>
          <Form.Group className="mb-3 sm" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email"
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button 
            variant="dark" 
            type="submit"
            onClick={handleSubmit}  
          >
            Submit
          </Button>
          <hr/>
          <a href="/register">Don't have an account? Register here.</a>
        </Form>
      </Row>
    </Container>
  );
}

export default LoginForm;