import React from "react";
import "./Skills.css";
import { ReactIcon } from "../icons/ReactIcon";
import { JSIcon } from "../icons/JSIcon";
export function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-panel">
        <span className="skills-title">My Skills</span>
      </div>
      <div className="skills-side-panel">
        <div className="icons-row">
          <ReactIcon />
          <JSIcon />
        </div>
      </div>
    </div>
  );
}
