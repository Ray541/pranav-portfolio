import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";

const Top = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const toTopBtn = document.querySelector(".to-top");

      if (window.scrollY > 500) {
        setToTop(true);
        toTopBtn.classList.add("animateToTop");
      } else {
        setToTop(false);
        toTopBtn.classList.remove("animateToTop");
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 90,
      behavior: "smooth",
    });
  };

  return (
    <div className="to-top">
      {toTop && (
        <Link to="home" smooth={true} duration={400}>
          <i className="bi bi-arrow-up-left-circle-fill" onClick={scrollUp}></i>
        </Link>
      )}
    </div>
  );
};

export default Top;
