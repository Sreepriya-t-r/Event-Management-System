// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";


// const PhotographersPage = () => {
//   const navigate = useNavigate();

//   const handleViewProfile = (id) => {
//     navigate(`/photographers/${id}`); 
//   };
//   return (
//     <div>
//       <div className="photographers-container" style={{marginTop:"100px"}}>
//         <h2 className=" ">Top Wedding Photographers</h2>
//         <p>
//           Ready to find the perfect photographer to capture every smile, tear,
//           and dance move at your wedding? You’re in the right place! We’ve
//           scoured coast to coast to bring you the best wedding photographers of
//           2024. Whether you're getting hitched in the rustic Midwest, bustling
//           cities of the Northeast, sunny shores of the West, or the charming
//           South, we've categorized these top talents to make your search a
//           breeze. Looking for something extra special? Check out our ultra-luxe
//           and up-and-coming photographers too! These professionals not only have
//           the eye for those once-in-a-lifetime shots but also the knack
//         </p>
//         <div className="photographers-container">
//           <h1 className="photographers-title">
//             The Best Photographers 
//           </h1>
//           <p className="photographers-subtitle">
//             The Northeast is home to some of the most talented creatives in the
//             photography industry. Find the perfect shooter to capture the magic
//             of your special moments.
//           </p>
     
       

//        <Container>
//       {/* Stack the columns on mobile by making one full-width and the other half-width */}
//       <Row>
//         <Col xs={12} md={8}>
//       <img src="https://loverly.com/api/v1/attachments/0442b344-60e6-4df9-91c4-b2fccea28914" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//         </Col>
//         <Col xs={6} md={4} className="mb-4">
//         <div className="photographer-card">
//           <img
//                 src="https://loverly.com/api/v1/attachments/d64e7dfd-0fd2-4773-9fa3-0c09080a0a64"
//                 alt="Bride standing"
//                 className=""
//                 style={{width:"400px",height:"400px"}}

//               />
//                <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Alyssa Flood Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//           </div>
//         </Col>
//       </Row>

//       {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
//       <Row>
//         <Col xs={6} md={4}>
//         <img src="https://loverly.com/api/v1/attachments/4e68c9ad-e463-4e07-9ef4-a124813856c8" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//         </Col>
//         <Col xs={6} md={4}>
//         <img src="https://loverly.com/api/v1/attachments/c4566d4f-7984-4daf-935d-d225c138d7f2" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//         </Col>
//         <Col xs={6} md={4}>
//         <img src="https://loverly.com/api/v1/attachments/0442b344-60e6-4df9-91c4-b2fccea28914" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//         </Col>
//       </Row>

//       {/* Columns are always 50% wide, on mobile and desktop */}
//       <Row className="mt-3">
//         <Col xs={6}>
//         <img src="https://loverly.com/api/v1/attachments/5fa00c24-b445-4af6-badf-60261dedfcc6" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//                </Col>
//         <Col xs={6}>
//         <img src="https://loverly.com/api/v1/attachments/bd040a71-fa1a-4def-858d-c4dc6ba59f5f" 
//                 style={{width:"400px",height:"400px"}}
//        alt="" />
//            <div className="photographer-info">
//             <h4 className="m-4">WEDDING PHOTOGRAPHY</h4>
//             <h2 className="">Allan Zepeda Photography</h2>
//             <p className="photographer-description">
//               Allan Zepeda has spent years capturing private weddings with a
//               signature aesthetic that is natural, intimate, and romantic.
//               Specializing in timeless moments that couples cherish forever
//             </p>
//             <button  onClick={() => handleViewProfile()} className="btn btn-dark">View Profile</button>
//                </div>
//         </Col>
//       </Row>
//     </Container>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotographersPage;
