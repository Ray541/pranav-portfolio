import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin social-icons"></i>
        </a>
        <a href="https://github.com/Ray541" target="_blank" rel="noreferrer">
          <i className="bi bi-github social-icons"></i>
        </a>
        <a
          href="https://www.facebook.com/pranav.rao.338"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook social-icons"></i>
        </a>
        <a
          href="https://www.instagram.com/pranav_rao0504"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram social-icons"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <span>| Designed by Ray |</span>
      </div>
    </footer>
  );
};

export default Footer;
