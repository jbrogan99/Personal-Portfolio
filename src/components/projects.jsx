import React from "react";
import github from "../images/github-min.png";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <ul>
        <li>
          <span>Recipe</span>
        </li>
        <li>
          <span>Doughnuts</span>
        </li>
        <li>
          <span>Currency Converter</span>
        </li>
        <li>
          <span>Blackjack</span>
        </li>
        <li>
          <span>E-commerce</span>
        </li>
        <li>
          <span>Tip Calculator</span>
        </li>
      </ul>
      {/* <a href="github.com/jbrogan99">
        <img alt="github logo" src={github} />
      </a> */}
    </section>
  );
};
