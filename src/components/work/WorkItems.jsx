import React from "react";
import "../../App.css";

const WorkItems = ({ item, index }) => {
  const target = item.link === "#" ? null : "_blank";
  return (
    <div
      className="work__card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${index + "00"}`}
    >
      <img src={item.image} alt="" className="work__img" />
      <div className="work__padding">
        <div className="work__icon-parent">
          {item.icon.map((icon, index) => {
            return (
              <img
                className="work__icon"
                src={icon}
                alt=""
                loading="lazy"
                key={index}
              />
            );
          })}
        </div>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} target={target} className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
