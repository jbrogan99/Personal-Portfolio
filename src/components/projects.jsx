import React from "react";
import github from "../images/github-min.png";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <ul>
        <li>Recipe</li>
        <li>Doughnuts</li>
        <li>Currency Converter</li>
        <li>Blackjack</li>
        <li>E-commerce</li>
        <li>Tip Calculator</li>
      </ul>
      <a href="github.com/jbrogan99">
        <img alt="github logo" src={github} />
      </a>
    </section>
  );
};
