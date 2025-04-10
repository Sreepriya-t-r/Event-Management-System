import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BookingForm = () => {

  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setLoading(true);
  
    setTimeout(() => {
      console.log("📸 Booking Details:", { ...formData, photographerId: id });
      setSubmitted(true);
      setLoading(false);
  
      // ✅ Show toast only on success
      toast.success(`🎉 Booking confirmed for Photographer ID: ${id}`);
  
      // Reset form
      setFormData({
        name: '',
        date: '',
        contact: '',
        message: ''
      });
    }, 1500);
  };
  

  return (
    
    <div className="booking-container container  " style={{width:"400px",marginTop:"100px"}}>
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-center mb-4">Book Photographer</h2>


      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className={`form-control ${errors.name && 'is-invalid'}`} name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Wedding Date:</label>
          <input type="date" className={`form-control ${errors.date && 'is-invalid'}`} name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <div className="invalid-feedback">{errors.date}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Info:</label>
          <input type="text" className={`form-control ${errors.contact && 'is-invalid'}`} name="contact" value={formData.contact} onChange={handleChange} />
          {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Message:</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} />
        </div>

        {/* Booking Preview */}
        {formData.name && formData.date && formData.contact && (
          <div className="alert alert-secondary">
            <strong>Preview:</strong><br />
            Name: {formData.name} <br />
            Date: {formData.date} <br />
            Contact: {formData.contact} <br />
            Message: {formData.message || "No message provided"}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-danger w-100"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          ) : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
