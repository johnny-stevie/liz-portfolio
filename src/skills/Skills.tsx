import React from "react";
import "./Skills.css";
export function Skills() {
  const techSkills = ["javascript", "react", "python", "r", "bash", "linux"];
  return (
    <div className="skills-section">
      <div className="skills-panel">
        <span className="skills-title">Skills</span>
      </div>
      <div className="skills-side-panel">
        <div className="icons-row">
          {techSkills.map((tech, i) => {
            return (
              <img
                key={i}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                alt=""
                className="icon-tech"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
