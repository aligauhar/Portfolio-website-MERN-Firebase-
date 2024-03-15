import React, { useContext } from "react";
import data from "../restApi.json"
import { FaLink } from 'react-icons/fa';
import "./css/footer.css";
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <div className="footer row">
      <div className="col-md-1">

      </div>
      <div className="footer-left footer-row col-md-4 ">
        <img src="main.PNG" alt="" />
        <h3>
          Ali Gauhar
        </h3>
        <p>
        Let me help you with your products so that they will stand out in the market.
        </p>
      </div>

      <div className=" col-md-1">
        <p className="break-footer" />

      </div>

      <div className="footer-right footer-row col-md-5">
        <h2>
          <FaLink /> Quick Navigation
          
        <div className="footerlinks">
        <a href="#experties " className="seperator nav-link">Experties</a>
        <a href="#portfolio " className="seperator nav-link">Portfolio</a> 
        <a href="#contact" className="nav-link">Contact</a> 
        </div>
        </h2>
      </div>
      <div className="col-md-1">


    </div>
    </div >
  );
};

export default Footer;





