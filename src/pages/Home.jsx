import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = ({ isAuthenticated }) => {  
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard"); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="m-5 w-75" style={{ border: "none" }}>
        <Row className="g-0 align-items-center">
          <Col md={5}>
            <Card.Body className="text-center">
              <Card.Title>
                <i className="fa-solid fa-heart border border-2 border-dark rounded p-2"></i>
              </Card.Title>
              <h1>The CelebrateUs List 2025</h1>
              <p>Find the best wedding vendors in the industry for your big day.</p>
              <button className="btn btn-dark" onClick={handleExploreClick}>
                Explore Dashboard
              </button>
            </Card.Body>
          </Col>
          <Col md={7} className="d-flex justify-content-center">
            <Card.Img
              src="https://media.istockphoto.com/id/478903292/photo/symbols-of-love-and-commitment.jpg?s=2048x2048&w=is&k=20&c=J-fo5Bgl2l2pvPa8qN6e7Mqs7nRbdSS-ZGcQ3OyYqc8="
              className="img-fluid m-3 shadow"
              alt="Card image"
              style={{
                width: "550px",
                height: "550px",
                objectFit: "cover",
                borderRadius: "20%",
              }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
