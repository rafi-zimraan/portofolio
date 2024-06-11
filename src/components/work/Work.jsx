import React from "react";
import "../../App.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portofolio">
      <h2
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Portofolio
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Most recent work
      </span>
      <Works />
    </section>
  );
};

export default Work;
