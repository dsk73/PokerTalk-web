import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Left Section */}
        <div className="footer-left">
          <img src="./images/logo.png" alt="PokerTalk Logo" className="footer-logo" />
          <p><i className="fa fa-phone"></i> +91 98765 43210</p>
          <p><i className="fa fa-envelope"></i> contact@pokertalk.com</p>

          <h2 className="brand-name">Follow Us</h2>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/news">Top Stories</a></li>
              <li><a href="/summaries">Summaries</a></li>
              <li><a href="/shorts">Short Videos</a></li>
              <li><a href="/players">Players</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <strong>PokerTalk</strong>. All rights reserved. | Designed with ❤️ by PokerTalk Team</p>
      </div>
    </footer>
  );
};

export default Footer;
