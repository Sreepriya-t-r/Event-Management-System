// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

// const WeddingEventProfileForm = () => {
//   const [formData, setFormData] = useState({
//     groomName: "",
//     brideName: "",
//     email: "",
//     phone: "",
//     weddingDate: "",
//     venue: "",
//     numberOfGuests: "",
//     additionalNotes: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Wedding Profile Data:", formData);
//     alert("Your wedding profile has been created!");
//     // Optionally send to backend here
//   };

//   return (
//     <Container className="mt-5">
//       <Card className="p-4 shadow rounded-4">
//         <h3 className="text-center mb-4">Create Your Wedding Event Profile</h3>
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Groom's Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="groomName"
//                   value={formData.groomName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Bride's Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="brideName"
//                   value={formData.brideName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Wedding Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="weddingDate"
//                   value={formData.weddingDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Number of Guests</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="numberOfGuests"
//                   value={formData.numberOfGuests}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Form.Group className="mb-3">
//             <Form.Label>Venue</Form.Label>
//             <Form.Control
//               type="text"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-4">
//             <Form.Label>Additional Notes</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               name="additionalNotes"
//               value={formData.additionalNotes}
//               onChange={handleChange}
//               placeholder="Anything else you'd like us to know?"
//             />
//           </Form.Group>

//           <div className="text-center">
//             <Button variant="dark" type="submit">
//               Save Wedding Profile
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default WeddingEventProfileForm;
