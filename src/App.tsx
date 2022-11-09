import React from "react";
import "./App.css";
import { Experience } from "./experience/Experience";
import { Home } from "./home/Home";
import { Skills } from "./skills/Skills";
import { Contact } from "./contact/Contact";
function App() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("slide-bottom");
  //         return;
  //       }
  //     });
  //   });
  //   const skillsSection = document.querySelector("#skills-section");
  //   if (skillsSection) {
  //     observer.observe(skillsSection);
  //   }
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <div className="app">
      <div id="home-section">
        <Home />
      </div>

      <div id="skills-section">
        <Skills />
      </div>
      <div id="exp-section">
        <Experience />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
