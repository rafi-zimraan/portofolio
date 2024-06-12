import React from "react";
import "../../App.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/rafizimraanarjuna.wijaya"
        className="home__social-icon"
        target="_blank"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://github.com/rafi-zimraan"
        className="home__social-icon"
        target="_blank"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://x.com/Rafizimraan"
        className="home__social-icon"
        target="_blank"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <i className="uil uil-twitter"></i>
      </a>
    </div>
  );
};

export default Social;
