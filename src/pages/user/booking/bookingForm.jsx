// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BookingForm = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     date: "",
//     contact: "",
//     message: "",
//   });

//   // Validate form fields
//   const validate = () => {};

//   // const handleChange = (e) => {

//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       console.log("📸 Booking Details:", { ...formData, photographerId: id });
//       setSubmitted(true);
//       setLoading(false);

//       // ✅ Show toast only on success
//       toast.success(`🎉 Booking confirmed for Photographer ID: ${id}`);

//       // Reset form
//       setFormData({
//         name: "",
//         date: "",
//         contact: "",
//         message: "",
//       });
//     }, 1500);
//   };

//   return (
//     <div
//       className="booking-container container  "
//       style={{ width: "400px", marginTop: "100px" }}
//     >
//       <ToastContainer position="top-center" autoClose={3000} />
//       <h2 className="text-center mb-4">Book Photographer</h2>

//       <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
//         <div className="mb-3">
//           <label className="form-label">Name:</label>
//           <input
//             type="text"
//             name="name"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Wedding Date:</label>
//           <input
//             type="date"
//             name="date"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Contact Info:</label>
//           <input
//             type="text"
            
//           />
         
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Additional Message:</label>
//           <textarea
//             className="form-control"
//             name="message"
//           />
//         </div>

//         {/* Booking Preview */}
//         {formData.name && formData.date && formData.contact && (
//           <div className="alert alert-secondary">
//             <strong>Preview:</strong>
//             <br />
//             Name: {formData.name} <br />
//             Date: {formData.date} <br />
//             Contact: {formData.contact} <br />
//             Message: {formData.message || "No message provided"}
//           </div>
//         )}

//         <button
//           type="submit"
//           className="btn btn-danger w-100"
//         />
        
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
