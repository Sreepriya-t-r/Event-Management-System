// import React from 'react'
// import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// // import userProfile from './userProfile'

// const Dashboard = () => {
//   return (
//     <div>
//          <div className="">
//       <div className="d-flex justify-content-center align-items-center ">
//         <Card className="m-5 w-75  " style={{ border: "none " }}>
//           <Row className="g-0 align-items-center">
//             <Col md={5}>
//               <Card.Body className="text-center">
//                 <Card.Title>
//                   <i className="fa-solid fa-heart border border-2 border-dark rounded p-2"></i>
//                 </Card.Title>
//                 <h1>The CelebrateUs List 2025</h1>
//                 <p>
//                   Find the best wedding vendors in the industry for your big
//                   day.
//                 </p>
//                 <Link to={"/bestWeddingVendors"} className="btn btn-dark" >View The List</Link>
               
//               </Card.Body>
//             </Col>
//             <Col md={7} className="d-flex justify-content-center">
//               <Card.Img
//                 src="https://media.istockphoto.com/id/478903292/photo/symbols-of-love-and-commitment.jpg?s=2048x2048&w=is&k=20&c=J-fo5Bgl2l2pvPa8qN6e7Mqs7nRbdSS-ZGcQ3OyYqc8="
//                 className="img-fluid m-3 shadow"
//                 alt="Card image"
//                 style={{
//                   width: "550px",
//                   height: "550px",
//                   objectFit: "cover",
//                   borderRadius: "20%",
//                 }}
//               />
//             </Col>
//           </Row>
//         </Card>
//       </div>
//       <div>
//       <h2 className="text-center mt-3">Welcome to Your Dashboard</h2>
//       {/* <userProfile/> */}
//     </div>
      
//       <Container className="my-5">
//         <Row className="g-4">
         

//           <Col xs={12} sm={6} md={4} lg={3}>
//             <Card className="shadow-sm" style={{ border: "none" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://media.istockphoto.com/id/930420650/photo/wedding-photoshoot-in-the-summer-park.jpg?s=2048x2048&w=is&k=20&c=2GufjXo18fg3UJTIf71jT6Z873MPF0arvo9rqcj2D-Q="
//                 alt="Card Image"
//                 height={"300px"}
//                 style={{ borderRadius: "20px" }}
//               />
//               <Card.Body className="text-center">
//                 <Card.Title>Wedding Photographer</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>

       
//         </Row>
//       </Container>
      
// <div className="d-flex justify-content-center align-items-center">
// <Carousel interval={3000} className="mt-5 mb-5"> 
//       <Carousel.Item>
//         <img
//           style={{width:"800px",height:"800px"}}
//           src="https://images.pexels.com/photos/916340/pexels-photo-916340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Slide 1"
//         />
//         <Carousel.Caption>
//         <h3 className="bg-light text-dark fw-bold py-2 px-4 rounded">Decoration & Theme</h3>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           style={{width:"800px",height:"800px"}}

//           src="https://images.pexels.com/photos/12351954/pexels-photo-12351954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Slide 2"
//         />
//         <Carousel.Caption>
//         <h3 className="bg-dark text-light fw-bold py-2 px-4 rounded"> Photography & Videography</h3>
      
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//                   style={{width:"800px",height:"800px"}}
//           src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Slide 3"
//         />
//         <Carousel.Caption>
//         <h3 className="bg-light text-dark fw-bold py-2 px-4 rounded">Catering Services</h3>
   
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//                style={{width:"800px",height:"800px"}}
         
//           src="https://images.pexels.com/photos/29624021/pexels-photo-29624021/free-photo-of-elegant-outdoor-wedding-setup-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//           alt="Slide 4"
//         />
//         <Carousel.Caption>
//         <h3 className="bg-dark text-light fw-bold py-2 px-4 rounded">Venue Booking</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
   
// </div>
  

//     </div>
//     </div>
//   )
// }

// export default Dashboard