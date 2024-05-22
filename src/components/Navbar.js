import React from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";

import { useEffect } from "react";

const Navbar = () => {
  // const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".navigation-wrap");
      if (window.scrollY > 100) {
        header.classList.add("scroll-on");
      } else {
        header.classList.remove("scroll-on");
      }
    });
  });

  useEffect(() => {
    var navLinks = document.querySelectorAll(".nav-link");
    const navBar = document.querySelector(".navbar-collapse.collapse");

    navLinks.forEach((links) => {
      links.addEventListener("click", () => {
        navBar.classList.remove("show");
      });
    });
  });

  return (
    <header className="header" id="header">
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#home"><h2>Pranav's<span className="logo-span">Portfolio</span></h2></a> */}
          <Link
            activeClass="active"
            className="navbar-brand"
            to="home"
            smooth={true}
            duration={400}
          >
            <h2>
              Pranav's
              {/* <span className="logo-span">Portfolio</span> */}
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list-nested" id="menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link navs" aria-current="page" href="#home">Home</a> */}
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  className="nav-link navs"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link navs" href="#about">About</a> */}
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  className="nav-link navs"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link navs" href="#project-banner">Projects</a> */}
                <Link
                  activeClass="active"
                  to="project-banner"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  className="nav-link navs"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link navs" href="#internship-banner">Internships</a> */}
                <Link
                  activeClass="active"
                  to="internship-banner"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  className="nav-link navs"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link navs" href="#contact">Contact</a> */}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  className="nav-link navs"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
