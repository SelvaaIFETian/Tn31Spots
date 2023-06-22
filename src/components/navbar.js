import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';


const NavigationBar = () => {
  return (
      <Navbar>
          
         <Nav>
          <Nav.Link href="#FeedBack">FeedBack</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          
        </Nav>
       </Navbar>

  );
};


export default NavigationBar;


