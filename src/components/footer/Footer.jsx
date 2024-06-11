import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1
          className="footer__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Rafi
        </h1>

        <ul
          className="footer__list"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="#"
            className="footer__social-link"
            target="_blank"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            href="https://www.linkedin.com/in/rafizimraanarjunawijaya/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            href="https://t.me/Rafizimraan"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram "></i>
          </a>
        </div>
        <span
          className="footer__copy"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
