import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { registerUser } from "../../../services/allApi";

const Signup = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onBtnClick = async (e) => {
    e.preventDefault();
    //  console.log(data);
    try {
      const { username, password, email } = data;
    
    
      if (username && email && password) {
        let apiResponse = await registerUser(data); 
        console.log(apiResponse);
    
       
        if (apiResponse.status === 201) {
          alert("User registration successful ✅");
          navigate('/login'); 
        } 
        
      
        else if (apiResponse.status === 409) {
          alert("User already exists,pls login!!");
          navigate('/login');
        } 
        
       
        else {
          alert("Something went wrong, please try again.");
        }
    
      } else {
        alert("Please fill all the fields ❗");
      }
    
    } catch (error) {
      console.log("Registration error:", error);
      alert("Server error, please try again later.");
    }
    
  };

  return (
    <div  >

<Container className="mt-5" style={{ marginTop: "80px",width:"800px" }}>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <div className="border p-4 rounded shadow">
          <h2 className="text-center mb-4">Sign Up</h2>

          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                required
                onChange={(e) =>
                  setData({ ...data, username: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Gmail ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Gmail ID"
                required
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                required
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={onBtnClick}
              className="w-100"
            >
              Sign Up
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
    </div>
    
  );
};

export default Signup;
