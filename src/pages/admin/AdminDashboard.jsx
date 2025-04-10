import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sampleVenues = [
    { id: 1, name: "Leela Palace", location: "Kochi", capacity: 300 },
    { id: 2, name: "Taj Convention Center", location: "Trivandrum", capacity: 500 },
  ];

  const sampleCaterers = [
    { id: 1, name: "Kerala Sadhya House", type: "Traditional" },
    { id: 2, name: "Taste of Punjab", type: "North Indian" },
  ];

  const samplePhotographers = [
    { id: 1, name: "Allan Zepeda", style: "Candid" },
    { id: 2, name: "Studio Stories", style: "Traditional" },
  ];

  const sampleBookings = [
    { id: 1, customer: "Arya Raj", service: "Venue", status: "Confirmed" },
    { id: 2, customer: "Rahul Menon", service: "Catering", status: "Pending" },
  ];
  const data = [
    { service: "Venues", bookings: 25 },
    { service: "Caterers", bookings: 40 },
    { service: "Photographers", bookings: 18 },
   
  ];
  
  const renderSection = () => {
    switch (activeSection) {
      case "venues":
        return (
          <>
      
            <h4 >Venue Management</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Venue Name</th>
                  <th>Location</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {sampleVenues.map((venue) => (
                  <tr key={venue.id}>
                    <td>{venue.id}</td>
                    <td>{venue.name}</td>
                    <td>{venue.location}</td>
                    <td>{venue.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      case "caterers":
        return (
          <>
            <h4>Caterer Management</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Caterer Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {sampleCaterers.map((caterer) => (
                  <tr key={caterer.id}>
                    <td>{caterer.id}</td>
                    <td>{caterer.name}</td>
                    <td>{caterer.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      case "photographers":
        return (
          <>
            <h4>Photographer Management</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Photographer Name</th>
                  <th>Style</th>
                </tr>
              </thead>
              <tbody>
                {samplePhotographers.map((photographer) => (
                  <tr key={photographer.id}>
                    <td>{photographer.id}</td>
                    <td>{photographer.name}</td>
                    <td>{photographer.style}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      case "bookings":
        return (
          <>
            <h4>Booking Management</h4>
            <div style={{ width: "100%", height: 300 }}>
      <h3 className="text-center mb-4">Service Booking Stats</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="service" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookings" fill="#007bff" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
            <Table striped bordered hover style={{marginTop:"100px"}}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customer}</td>
                    <td>{booking.service}</td>
                    <td>{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      default:
        return <p className="text-muted text-center">Select a section to manage.</p>;
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row className="g-4">
        <Col md={6} lg={3}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Manage Venues</Card.Title>
              <Card.Text>Add, edit, or remove venues.</Card.Text>
              <Button variant="primary" onClick={() => setActiveSection("venues")}>
                Go to Venues
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Manage Caterers</Card.Title>
              <Card.Text>Add or update caterers.</Card.Text>
              <Button variant="success" onClick={() => setActiveSection("caterers")}>
                Go to Caterers
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Manage Photographers</Card.Title>
              <Card.Text>Edit photographer profiles.</Card.Text>
              <Button variant="warning" onClick={() => setActiveSection("photographers")}>
                Go to Photographers
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Manage Bookings</Card.Title>
              <Card.Text>View all user bookings.</Card.Text>
              <Button variant="dark" onClick={() => setActiveSection("bookings")}>
                Go to Bookings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">{renderSection()}</div>
    </Container>
  );
};

export default AdminDashboard;
