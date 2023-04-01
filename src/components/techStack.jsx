import React from "react";
import react from "../images/react-min.png";
import typescript from "../images/ts-min.png";
import html from "../images/html-min.png";
import css from "../images/css-min.png";
import js from "../images/js-min.png";
import reactTesting from "../images/react-testing-library-min.png";
import jestTesting from "../images/jest-min.png";

export const TechStack = () => {
  return (
    <section className="tech-stack-container">
      <span className="tech-stack-title-container">
        <h2>Tech Stack</h2>
      </span>
      <ul className="ul-tech">
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="react tech-name">React</li>
          <li className="tech-logo-container">
            <img src={react} alt="react logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="ts tech-name">TypeScript</li>
          <li className="tech-logo-container">
            <img src={typescript} alt="typescript logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="html tech-name">HTML</li>
          <li className="tech-logo-container">
            <img src={html} alt="html logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="css tech-name">CSS</li>
          <li className="tech-logo-container">
            <img src={css} alt="css logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="js tech-name">JavaScript</li>
          <li className="tech-logo-container">
            <img src={js} alt="javascript logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="react-testing tech-name">React Testing Library</li>
          <li className="tech-logo-container">
            <img src={reactTesting} alt="react testing library logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
        <div className="tech-container">
          <li className="jest tech-name">Jest</li>
          <li className="tech-logo-container">
            <img src={jestTesting} alt="jest testing library logo" />
          </li>
        </div>
        <li>
          <hr />
        </li>
      </ul>
    </section>
  );
};
