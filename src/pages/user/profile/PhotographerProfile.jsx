import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PhotographerProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate(`/photographers/${id}/book`);
      };

      const [reviews, setReviews] = useState([
        { name: "John & Emma", comment: "Absolutely stunning photos! Professional & warm." },
        { name: "Sarah", comment: "Captured every moment perfectly. Highly recommend!" },
      ]);
    
      const [name, setName] = useState("");
      const [comment, setComment] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
          const newReview = { name, comment };
          setReviews([newReview, ...reviews]); // New on top
          setName("");
          setComment("");
          alert("Thank you for your feedback! 🎉");
        }
      };
  return (
    <div>
         <div className="profile-container  " style={{marginTop:"100px"}}>
      <h1 className='text-center mt-3' >Allan Zepeda Photography</h1>
      
      <div className="gallery-grid">
              <img
                src="https://loverly.com/api/v1/attachments/2fdb4bfd-70c1-468f-bca8-795dac05bcba"
                alt="Bride standing"
                className="large-image"
              />
              <img
                src="https://loverly.com/api/v1/attachments/ecd64587-f57a-4ee1-9c49-d383db21ac7c"
                alt="Couple holding hands"
                className="small-image"
              />
              <img
                src="https://loverly.com/api/v1/attachments/f356bad8-f547-46d6-a598-0f0cbbd3416f"
                alt="Ballroom dance"
                className="small-image"
              />
              <img
                src="https://loverly.com/api/v1/attachments/bcfc220c-b2ef-469f-aede-63c7f51f3de0"
                alt="Laughing couple"
                className="small-image"
              />
              <img
                src="https://loverly.com/api/v1/attachments/60a0d4f6-09d0-44f6-812a-91c005947b3b"
                alt="Wedding at the gate"
                className="small-image"
              />
                    <p className='fs-5'><span className='text-dark fs-1'>Allan Zepeda</span> has spent nearly 20 years shooting private weddings and events worldwide. He believes that it’s an honor witnessing and documenting the joining of two families and the emotions and traditions that go along with this occasion. His style and signature aesthetic has been described as timeless, natural, and romantic with understated elegance. He specializes in capturing genuine emotions and joyful moments — the photos that clients don’t know to request and the ones that other photographers overlook. In addition, he specializes in documenting events with an editorial eye without disrupting the couple or taking them away from the experience of their wedding weekend.</p>
                    


    
            </div>
            <div className="container mt-5">
  
  
  <div className="row ">
   
   
   
    <div className="col-md-6 mb-4 text-center   shadow-sm">
      <h5 >🏅 Awards & Certifications</h5>
      
        <p>✨ Top 10 Wedding Photographers – Vogue Magazine</p>
        <p>📸 Certified Professional Photographer (CPP)</p>
        <p>🏆 Best Storytelling Photography – NY Wedding Expo 2023</p>
   
    </div>

 
    <div className="col-md-6 mb-4 text-center  shadow-sm">
      <h5>🎨 Photography Style</h5>
      <p>
        <strong>Specialties:</strong> Photojournalistic, Editorial, Candid & Traditional  
        <br />
        <em>
          "I believe in capturing raw emotions as they unfold — real laughter, real tears, real joy."
        </em>
      </p>
    </div>
  </div>
</div>

   <div className=" photographer-profile-container">
   <div className="container py-4">
  <div className="row align-items-center">
    {/* Column 1: Photographer Image */}
    <div className="col-md-4 text-center">
      <img
        src="https://media.istockphoto.com/id/473252622/photo/man-making-picture.jpg?s=612x612&w=is&k=20&c=zbKRX0g7kGyl2ypLYCgnt8aUDhSZdIdl_yLMiKniz5k="
        alt="Photographer"
        style={{
          border: "1px solid red",
          borderRadius: "200px",
          width: "200px",
          height: "200px",
          objectFit: "cover"
        }}
      />
    </div>

    {/* Column 2: Profile Info + Pricing */}
    <div className="col-md-8">
      <div className="profile-info">
        <h2>Allan Zepeda Photography</h2>
        <p className="category">Wedding Photography</p>
        <p className="location">New York, USA</p>
      </div>

      {/* Payment & Booking */}
      <div className="pricing mt-4">
        <h3>Pricing & Payment</h3>
     
        <button className="book-now-btn btn btn-danger" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  </div>
</div>

<div className="container mt-5">
  <h3 className="text-center mb-4">Packages</h3>
  <div className="row justify-content-center">
    <div className="col-md-3 mb-3">
      <div className="package-card p-3 border rounded shadow text-center">
        <h5>✨ Basic</h5>
        <p>$500</p>
        <p>4 hours</p>
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <div className="package-card p-3 border rounded shadow text-center">
        <h5>💎 Premium</h5>
        <p>$1000</p>
        <p>Full Day Coverage</p>
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <div className="package-card p-3 border rounded shadow text-center">
        <h5>👑 Luxury</h5>
        <p>$1500</p>
        <p>Full Day + Album</p>
      </div>
    </div>
  </div>
</div>


<div className="container mt-5">
      <h3 className="text-center mb-4">Reviews</h3>

      {/* Submit Review Card */}
      <div className="row justify-content-center">
        <div className="col-md-10 mb-4">
          <div className="p-4 bg-light border rounded shadow-sm">
            <h5 className="mb-3">Leave a Review</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                className="form-control mb-2"
                placeholder="Your Review"
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-outline-dark m-5">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Display Reviews */}
      <div className="row justify-content-center">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-5 mb-3">
            <div className="review-card p-3 bg-dark text-light border rounded shadow-sm">
              <p><strong>{review.name}:</strong> "{review.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
    </div>
    </div>
  )
}

export default PhotographerProfile