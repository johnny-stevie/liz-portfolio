import React from "react";
import "./Experience.css";
export function Experience() {
  return (
    <div className="exp-section">
      <div className="exp-panel">
        <span className="exp-eg-title">
          Intern at bioinformatics in Newcastle University
        </span>
        <ul>
          <li className="exp-eg-text">
            Worked on DNA data using Linux and Bash
          </li>
        </ul>
        <br />
        <span className="exp-eg-title">AI project</span>
        <ul>
          <li className="exp-eg-text">
            Worked on predicting customer satisfaction from drug reviews
          </li>
        </ul>
      </div>

      <div className="exp-side-panel">
        <span className="exp-title">Experience</span>
      </div>
    </div>
  );
}
