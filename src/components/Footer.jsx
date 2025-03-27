import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="mb-5 ms-5 px-4 " style={{marginTop:"400px"}}>
      <Row className="align-items-center">
      
        <Col md={3}>
          <h3>
            CelebrateUs <i className="fa-solid fa-champagne-glasses"></i>
          </h3>
          <h6>A wedding planner focused on you two</h6>
          <p className="text-sm">
            💍✨ It captures the essence of a wedding being a celebration of
            love and partnership while feeling warm and personal.
          </p>
        </Col>

       
        <Col md={2}>
          <h3>Links</h3>
       
          <div className="d-flex flex-column gap-3 ">
                <Link to={"/"} className="fs-5 text-decoration-none">Home Page</Link>
                <Link to={"/"}  className="fs-5 text-decoration-none"> Page</Link>
                <Link to={"/"}  className="fs-5 text-decoration-none"> Page</Link>
            </div>
        </Col>

 
      

        <Col md={1}></Col> 

        <Col md={3}>
          <h3>Contact</h3>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              className="me-2 bg-secondary border border-dark"
            />
            <Button variant="primary" className="mt-3" style={{width:"10px"}}>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Form>

          {/* Social Icons */}
          <div className="mt-4">
            <a href="#" className="me-2">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#" className=" me-2">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a href="#" className=" me-2">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a href="#" className=" me-2">
              <i className="fa-brands fa-youtube fa-lg"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
