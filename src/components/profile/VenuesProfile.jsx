import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const VenueProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/venues/${id}/book`);
  };

  return (
    <div className="profile-container" style={{ marginTop: "100px" }}>
      <h1 className="text-center mt-3">Allan Zepeda Venue</h1>

      <div className="gallery-grid">
        <img
          src="https://loverly.com/api/v1/attachments/01fa5915-06f4-4720-b5ed-790a0bdcee46"
          alt="Bride standing"
          className="large-image"
        />
        <img
          src="https://loverly.com/api/v1/attachments/6137b91e-229d-4862-9add-52b390994e3f"
          alt="Couple holding hands"
          className="small-image"
        />
        <p className="fs-5">
          <span className="text-dark fs-1">Allan Zepeda Venue</span> provides a
          timeless and elegant space for your special day.
        </p>
      </div>

     
      <div className="pricing">
        <h3>Pricing & Payment</h3>
        <p><strong>Deposit Required</strong></p>
        <p>Accepted Payment Methods: 💳 Check</p>
        <button className="book-now-btn btn btn-danger" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VenueProfile;
