import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Leghari Properties</h3>
          <ul>
            <li><a href="/for-rent">For Rent</a></li>
            <li><a href="/for-sale">For Sale</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul>
            <li>Email: <a href="mailto:info@leghariproperties.com">info@leghariproperties.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+923194781148</a></li>
            <li>Address: 123 Main Street,Islamabad, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Leghari Properties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
