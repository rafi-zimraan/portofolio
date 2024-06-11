import React from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { useState } from "react";
import { useEffect } from "react";
import "../../App.css";
import Aos from "aos";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newPorjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newPorjects);
    }
    Aos.refresh();
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div
        className="work__filters"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item, index) => {
          return <WorkItems item={item} key={item.id} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Works;
