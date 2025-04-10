import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




const CaterersPage = () => {
  const navigate = useNavigate();

  const handleViewProfile = (id) => {
    navigate(`/caterer/${id}`);
  };

  return (
    <div className="container mt-5">
    <h2 className="mb-4 text-center">Explore Our Catering Partners</h2>
    <p className="text-center mb-5">
      From traditional Sadhya feasts to elegant Western cuisine, discover the perfect catering partner for your wedding celebration.
    </p>

    <Container>
      <Row>
             <Col xs={6} md={4}>
             <img src="https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                     style={{width:"400px",height:"400px"}}
            alt="" />
                <div className="photographer-info">
                 <h4 className="m-4">Traditional Kerala Feast</h4>
                 <h2 className="">Traditional Catering Service</h2>
                 <p className="photographer-description">
                 Experience fine Western cuisine with a professional setup and exquisite flavors for your big day.
                 </p>
                 <button  onClick={() => handleViewProfile(1)} className="btn btn-dark">View Profile</button>
                    </div>
             </Col>
             <Col xs={6} md={4}>
             <img src="https://images.pexels.com/photos/2788492/pexels-photo-2788492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                     style={{width:"400px",height:"400px"}}
            alt="" />
                <div className="photographer-info">
                 <h4 className="m-4">North Indian Royal Feast</h4>
                 <h2 className="">Elegant Western Dining</h2>
                 <p className="photographer-description">
                 Delicious North Indian cuisine with a variety of curries, breads, and sweets that everyone will love.
                 </p>
                 <button  onClick={() => handleViewProfile(2)} className="btn btn-dark">View Profile</button>
                    </div>
             </Col>
             <Col xs={6} md={4}>
             <img src="https://images.pexels.com/photos/2606405/pexels-photo-2606405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                     style={{width:"400px",height:"400px"}}
            alt="" />
                <div className="photographer-info">
                 <h4 className="m-4">Fusion Wedding Catering</h4>
                 <h2 className="">Western Catering</h2>
                 <p className="photographer-description">
                 Delicious North Indian cuisine with a variety of curries, breads, and sweets that everyone will love.
                 </p>
                 <button  onClick={() => handleViewProfile(3)} className="btn btn-dark">View Profile</button>
                    </div>
             </Col>
           </Row>
    </Container>
  </div>
);
};

 

export default CaterersPage