// HeroSection.jsx
import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {  FaThemeisle } from "react-icons/fa";
import { ThemeContext } from "../Theme";
import Resume from './resume';

import "./css/HeroSection.css";
const NavbarComponent = () => {
  const { theme, toggleTheme, gradiant, toggleGradiant } = useContext(ThemeContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom-wrapper">
      <div>
        <img
          src="main.png"
          width="30"
          height="30"
          className="d-inline-block align-top grayscale-image"
          alt="Logo"
        />
      </div>
      <div className="navlinks col-md-7">
        <a href="#experties " className="seperator nav-link">Experties</a>
        <a href="#portfolio " className="seperator nav-link">Portfolio</a> 
        <a href="#contact" className="nav-link">Contact</a> 
      </div>
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav toggle-btn" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav>
            <Resume/>
       
        </Nav>
        <div className="header-container">
        <div className="header-toggle-buttons">
          <button
            onClick={() => {
              toggleTheme();
              toggleGradiant();
            }}
          >
            <FaThemeisle /> {theme}
          </button>
        </div>
      </div>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default NavbarComponent;
