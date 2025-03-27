import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
 <Navbar fixed="top" className="bg-body-tertiary w-100 shadow">
   <Container>
     <Navbar.Brand >CelebrateUs<i class="fa-solid fa-heart"></i></Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse className="justify-content-end">
       <Navbar.Text>
       Welcome, User!
       </Navbar.Text>
     </Navbar.Collapse>
   </Container>
 </Navbar>


    </div>
  )
}

export default Header