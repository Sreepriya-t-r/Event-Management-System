import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PhotographerProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate(`/photographers/${id}/book`);
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
                     {/* Payment & Booking */}
  <div className="pricing">
        <h3>Pricing & Payment</h3>
        <p><strong>Deposit Required</strong></p>
        <p>Accepted Payment Methods: 💳 Check</p>
        <button className="book-now-btn  btn btn-danger" onClick={handleBookNow}>
        Book Now
      </button>
      </div>

    
            </div>
 
    </div>
    </div>
  )
}

export default PhotographerProfile