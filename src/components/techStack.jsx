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
    <section className="tech-container">
      <h2>Tech Stack</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React Testing Library</li>
        <li>Jest</li>
      </ul>
      <img src={react} alt="react logo" />
      <img src={typescript} alt="react logo" />
      <img src={html} alt="react logo" />
      <img src={css} alt="react logo" />
      <img src={js} alt="react logo" />
      <img src={reactTesting} alt="react logo" />
      <img src={jestTesting} alt="react logo" />
    </section>
  );
};
