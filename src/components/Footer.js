import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-wrapper">
        <nav className="email-facebook">
          <div className="email">
            Email
            <a href="mailto:example.com">example.com</a>
          </div>
          <div className="facebook">
            Follow us
            <a href="facebook.com">
              <FaFacebookSquare />
            </a>
          </div>
        </nav>

        <span>&copy; 2020 felipitos mexican food</span>
      </div>
    </footer>
  );
};

export default Footer;
