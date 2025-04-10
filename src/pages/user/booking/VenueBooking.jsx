import React from 'react'
import  { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VenueBooking = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        functionDate: '',
        guests: '',
        rooms: '',
        functionType: '',
        pricingRequest: ''
      });
    
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
    
      const fields = [
        { label: 'Full Name', name: 'fullName', type: 'text' },
        { label: 'Phone Number', name: 'phone', type: 'text' },
        { label: 'Email Address', name: 'email', type: 'email' },
        { label: 'Function Date', name: 'functionDate', type: 'date' },
        { label: 'Number of Guests', name: 'guests', type: 'number' },
        { label: 'Number of Rooms', name: 'rooms', type: 'number' }
      ];
    
      const validate = () => {
        const newErrors = {};
        fields.forEach(({ name }) => {
          if (!formData[name]) newErrors[name] = `${name} is required`;
        });
        if (!formData.functionType) newErrors.functionType = 'Function Type is required';
        if (!formData.pricingRequest.trim()) newErrors.pricingRequest = 'Pricing Request is required';
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
          console.log("Venue:", formData);
          toast.success("🎉 Booking Submitted Successfully!");
          setLoading(false);
    
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            functionDate: '',
            guests: '',
            rooms: '',
            functionType: '',
            pricingRequest: ''
          });
        }, 1500);
      };

  return (
    <div>
          <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-center mb-4">Venue Booking</h2>
      <p className="text-center text-muted">
        Fill this form and we will contact you shortly. All the information provided will be treated confidentially.
      </p>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">

        {/* Render Fields Using Map */}
        {fields.map(field => (
          <div className="mb-3" key={field.name}>
            <label className="form-label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className={`form-control ${errors[field.name] && 'is-invalid'}`}
              value={formData[field.name]}
              onChange={handleChange}
            />
            {errors[field.name] && (
              <div className="invalid-feedback">{errors[field.name]}</div>
            )}
          </div>
        ))}

       
        {/* Pricing Request */}
        <div className="mb-3">
          <label className="form-label">Request Pricing</label>
          <textarea
            name="pricingRequest"
            className={`form-control ${errors.pricingRequest && 'is-invalid'}`}
            value={formData.pricingRequest}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us what you’re looking for..."
          />
          {errors.pricingRequest && (
            <div className="invalid-feedback">{errors.pricingRequest}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          ) : "Submit Booking"}
        </button>
      </form>
    </div>
  </div>
  )
}

export default VenueBooking