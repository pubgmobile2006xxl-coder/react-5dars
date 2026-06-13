import React from 'react';
import './Footer.css';
import frm from '../../img/Frame64.png'; // Logotip yo'lini to'g'irla

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Newsletter qismi */}
      <div className="newsletter-card">
        <h3>Newsletter</h3>
        <h2>Subscribe To Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Asosiy Footer */}
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>9 W 53rd St, London, NY 10019, UK</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>

        <div className="footer-brand">
          <img src={frm} alt="Eat Turkish" />
          <p>"The best way to find yourself is to lose yourself in the service of others."</p>
          <div className="social-links">
            <a href="#">FB</a> <a href="#">TW</a> <a href="#">IG</a>
          </div>
        </div>

        <div className="working-hours">
          <h4>Working Hours</h4>
          <p>Monday-Friday: 08:00 am - 12:00 am</p>
          <p>Saturday-Sunday: 07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        2022 Pop online. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;