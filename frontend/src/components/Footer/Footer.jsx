import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-us">
        <h3>Contact Us</h3>
        <p>Email: contact@skillup.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className="follow-us">
        <h3>Follow Us</h3>
        <p>Facebook | Twitter | LinkedIn | Instagram</p>
      </div>
    </footer>
  );
}

export default Footer;
