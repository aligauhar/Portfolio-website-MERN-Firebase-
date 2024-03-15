import './css/social-links.css';
import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function SocialMediaIcons(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="social-box">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ali-gauhar-ab29341b7/" className="social-link" target="_blank">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/aligauhar/" className="social-link" target="_blank">
              <FaGithub size={32} />
            </a>
            <a href="https://wa.me/+923212239044" className="social-link" target="_blank">
              <FaWhatsapp size={32} />
            </a>
        
        {showMore && (
          <>
            <a href="https://www.instagram.com/aligauharcb/" className="social-link" target="_blank">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.facebook.com/AliGauharCB/" className="social-link" target="_blank">
          <FaFacebook size={32} />
        </a>
            {/* Add more social media icons here if needed */}
          </>
        )}
      </div>
      <div className="show-more" onClick={handleShowMore}>
      <span>{showMore ? <FaChevronUp size={16} />: <FaChevronDown size={16} />}</span>

        
      </div>
    </div>
  );
}
