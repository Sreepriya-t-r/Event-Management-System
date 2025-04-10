import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

const caterers = [
  {
    id: 1,
    name: "Traditional Kerala Feast",
    type: "Traditional Catering Service",
    image:
      "https://media.istockphoto.com/id/951005968/photo/the-table-laid-for-a-holiday-with-food-2791.jpg?s=2048x2048&w=is&k=20&c=FwDiioJ8qgbSiLPvm4pF5wQTjbcq9UBbbKnOs3RSCBo=",
    description:
      "Enjoy a full Sadhya feast served on banana leaves with authentic Kerala dishes prepared with love and tradition.",
    menu: [
      "Rice",
      "Sambar",
      "Aviyal",
      "Rasam",
      "Payasam",
      "Pickles",
      "Banana Chips",
    ],
  },
  {
    id: 2,
    name: "Elegant Western Dining",
    type: "Western Catering",
    image: "https://media.istockphoto.com/id/951005968/photo/the-table-laid-for-a-holiday-with-food-2791.jpg?s=2048x2048&w=is&k=20&c=FwDiioJ8qgbSiLPvm4pF5wQTjbcq9UBbbKnOs3RSCBo=",
    description:
      "Experience fine Western cuisine with a professional setup and exquisite flavors for your big day.",
    menu: [
      "Grilled Chicken",
      "Mashed Potatoes",
      "Pasta",
      "Caesar Salad",
      "Cheesecake",
    ],
  },
  {
    id: 3,
    name: "North Indian Royal Feast",
    type: "North Indian Catering",
    image:
      "https://media.istockphoto.com/id/951005968/photo/the-table-laid-for-a-holiday-with-food-2791.jpg?s=2048x2048&w=is&k=20&c=FwDiioJ8qgbSiLPvm4pF5wQTjbcq9UBbbKnOs3RSCBo=",
    description:
      "Delicious North Indian cuisine with a variety of curries, breads, and sweets that everyone will love.",
    menu: [
      "Paneer Butter Masala",
      "Naan",
      "Dal Makhani",
      "Gulab Jamun",
      "Veg Biryani",
    ],
  },
  {
    id: 4,
    name: "Fusion Wedding Catering",
    type: "Fusion Style",
    image:
      "https://media.istockphoto.com/id/1224989113/photo/indian-wedding-catering.jpg",
    description:
      "A unique mix of global flavors that fuses traditional and modern cuisines to suit your wedding theme.",
    menu: [
      "Tandoori Tacos",
      "Sushi Samosa",
      "Butter Chicken Sliders",
      "Choco Jalebi",
    ],
  },
];

const CatererProfile = () => {
  const { id } = useParams();
  const caterer = caterers.find((item) => item.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    guests: "",
  });

  if (!caterer) {
    return <h2 className="text-center mt-5">Caterer not found</h2>;
  }

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking submitted successfully!");
    handleClose();
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src={caterer.image}
            alt={caterer.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>
        <Col md={6}>
          <h2>{caterer.name}</h2>
          <p className="text-muted">{caterer.type}</p>
          <p>{caterer.description}</p>
          <h5 className="mt-4">Popular Menu Items:</h5>
          <ul>
            {caterer.menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button variant="dark" className="mt-3" onClick={handleShow}>
            Book Now
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book {caterer.name}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="dark" type="submit">
              Submit Booking
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default CatererProfile;
