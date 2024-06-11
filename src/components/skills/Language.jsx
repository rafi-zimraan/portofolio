import React from "react";
import "../../App.css";

const Language = () => {
  return (
    <div
      className="skills__content"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <h3 className="skills__title">Language</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Indonesia</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">English</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
