import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const VenueProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/venues/${id}/VenueBooking`);
  };

  return (
    <div className="container mt-5 pt-5">
    
      <div className="text-center mb-4">
        <h1 className="fw-bold display-5">Allan Zepeda Wedding Venue</h1>
        <p className="text-muted fs-5">
          A timeless and elegant setting to celebrate your forever.
        </p>
      </div>

   
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <img
            src="https://loverly.com/api/v1/attachments/01fa5915-06f4-4720-b5ed-790a0bdcee46"
            alt="Bride standing"
            className="img-fluid rounded shadow"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-4 d-flex flex-column gap-4">
          <img
            src="https://loverly.com/api/v1/attachments/6137b91e-229d-4862-9add-52b390994e3f"
            alt="Couple holding hands"
            className="img-fluid rounded shadow"
          />
          
        </div>
      </div>

      
      <div className="mb-5">
        <h3 className="fw-semibold">About the Venue</h3>
        <p className="fs-5">
          Nestled in the heart of elegance, Allan Zepeda Venue offers a breathtaking backdrop for your wedding day. Whether you're planning an intimate ceremony or a grand celebration, this venue promises a perfect blend of charm and sophistication.
        </p>
      </div>

   
      <div className="p-4 bg-light rounded shadow mb-5 text-center">
        <h4 className="fw-bold mb-3">💸 Pricing & Payment</h4>
        <p className="fs-5 mb-4">
          Starting from ₹75,000 | Custom packages available
        </p>
        <button
          className="btn btn-dark px-4 py-2 fs-5 rounded"
          onClick={handleBookNow}
        >
          Book This Venue
        </button>
      </div>
    </div>
  );
};

export default VenueProfile;
