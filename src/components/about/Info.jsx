import React from "react";
import "../../App.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box" data-aos="fade-up" data-aos-duration="1000">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1.5 Year Working</span>
      </div>
      <div
        className="about__box"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5 Projects</span>
      </div>
      <div
        className="about__box"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
