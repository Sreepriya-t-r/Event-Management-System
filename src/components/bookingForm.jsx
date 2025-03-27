import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const bookingForm = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for Photographer ID: ${id}`);
      };

  return (
    <div>
         <div className="booking-container" style={{marginTop:"100px"}}>
      <h2>Book Photographer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Wedding Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Contact Info:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />

        <label>Additional Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>

        <button type="submit" className="confirm-btn">Confirm Booking</button>
      </form>
    </div>
    </div>
  )
}

export default bookingForm