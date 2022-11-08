import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="home-div">
        <div className="profile-pic"></div>
      </div>
      <div className="side-panel">
        <span className="about-me">
          I am a 2nd year undergraduate at Durham University studying Computer
          Science and Mathemetatics
        </span>
        <span className="greeting">Hi I am Elizabeth</span>
      </div>
    </div>
  );
}
