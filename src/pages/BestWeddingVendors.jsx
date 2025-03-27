import React from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import flower from '../assets/flower-card.jpg'
import caterer from '../assets/caterer.jpg'
import venue from '../assets/venueImg.jpeg'
import decoration from '../assets/decoration.jpeg'


const BestWeddingVendors = () => {
  const categories = [
    { name: "Photography", image: flower, path: "/photographers" },
    { name: "Wedding Venues", image: venue, path: "/venues" },
    { name: "Catering", image: caterer,path:"/caterers" },
    { name: "Decoration & Theme", image:decoration, path: "/decoration" },
  ];
  return (
    <div>
    
  
        <div className=" vh-100" style={{marginTop:"100px"}}>
          <h3 className='text-center mt-3'>Browse By Category</h3>
          <p className='text-center mt-5'>Explore the top wedding vendors across all categories and discover the best of the best for your special day.</p>
         
<div className="container ">
     
      <div className="grid d-flex justify-content-center align-items-center mt-5">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="category-card">
            <figure className='ms-4'>
            <img src={category.image} alt={category.name} style={{width:"350px",height:"500px"}} className="category-image" />
            <figcaption className="category-name ">{category.name}</figcaption>
            </figure>
           
          </Link>
        ))}
      </div>
    </div>

    <div className="row ms-5 ">
          <h1 className='text-center m-4'>Our Selection Process</h1>
        <div className="col-3 mt-4 border border-1 shadow ms-5">
        <i class="fa-solid fa-globe fs-1 m-4"></i>
          <h3>Diverse Selection</h3>
          <p>Winners are chosen to reflect a variety of locations, price points, styles and diverse offerings in the wedding industry.</p>
        </div>
        <div className="col-3 mt-4 border border-1 shadow ms-5">
        <i class="fa-solid fa-holly-berry fs-1 m-4"></i>
          <h3>Design & Aesthetic</h3>
          <p>Our editors carefully curate selections that showcase exceptional design and artistic merit, setting a standard of excellence within the industry.</p>
        </div>
       
        <div className="col-3 mt-4 border border-1 shadow ms-5">
        <i class="fa-solid fa-star fs-1 m-4"></i>
          <h3>Quality of Service</h3>
          <p>Recognized for their outstanding service from the initial quote to the wedding day, our winners exemplify professionalism in communication, planning and execution.</p>
        </div>
        </div>
        </div>

       
    </div>
  )
}

export default BestWeddingVendors