import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const VenuesPage = () => {
 

  const navigate = useNavigate();

  const handleViewProfile = (id) => {
    navigate(`/venues/${id}`); 
  };
  return (
    <div>
       <div>
      <div className="photographers-container" style={{marginTop:"100px"}}>
        <h2 className=" ">The Best Wedding Venues</h2>
        <p>
        Choosing the right wedding venue is one of the most important steps of wedding planning—it sets the stage for your entire celebration. If you’re searching for wedding venues that provide a breathtaking backdrop for your wedding ceremonies, you’ve come to the right place. 
Our comprehensive list includes the best wedding venues in the country, from luxurious hotels and serene garden settings to rustic barns and urban lofts. We’ve organized these spaces by region—Northeast, West Coast, Midwest, South—and even special categories like ultra-luxe and hidden gems. 
Each wedding venue on our list has been carefully selected to ensure that no matter where you say "I do," the setting will be as memorable as the day itself.
        </p>
        <div className="photographers-container">
          <h1 className="photographers-title">
          The Best Wedding Venues
          </h1>
          <p className="photographers-subtitle">
            The Northeast is home to some of the most talented creatives in the
            photography industry. Find the perfect shooter to capture the magic
            of your special moments.
          </p>
     
       

       <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
      <img src="https://loverly.com/api/v1/attachments/01fa5915-06f4-4720-b5ed-790a0bdcee46" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
        </Col>
        <Col xs={6} md={4} className="mb-4">
        <div className="photographer-card">
          <img
                src="https://loverly.com/api/v1/attachments/01fa5915-06f4-4720-b5ed-790a0bdcee46"
                alt="Bride standing"
                className=""
                style={{width:"400px",height:"400px"}}

              />
               <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Alyssa Flood Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
          </div>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
        <img src="https://loverly.com/api/v1/attachments/b61ceaa9-be61-4a75-9180-0a6d037c7ae7" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
        </Col>
        <Col xs={6} md={4}>
        <img src="https://loverly.com/api/v1/attachments/c4566d4f-7984-4daf-935d-d225c138d7f2" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
        </Col>
        <Col xs={6} md={4}>
        <img src="https://loverly.com/api/v1/attachments/01fa5915-06f4-4720-b5ed-790a0bdcee46" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="mt-3">
        <Col xs={6}>
        <img src="https://loverly.com/api/v1/attachments/5fa00c24-b445-4af6-badf-60261dedfcc6" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
               </Col>
        <Col xs={6}>
        <img src="https://loverly.com/api/v1/attachments/bd040a71-fa1a-4def-858d-c4dc6ba59f5f" 
                style={{width:"400px",height:"400px"}}
       alt="" />
           <div className="photographer-info">
            <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
            <h2 className="">Allan Zepeda Photography</h2>
            <p className="photographer-description">
              Allan Zepeda has spent years capturing private weddings with a
              signature aesthetic that is natural, intimate, and romantic.
              Specializing in timeless moments that couples cherish forever
            </p>
            <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
               </div>
        </Col>
      </Row>
    </Container>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VenuesPage