import React, { useContext } from "react";
import react from "../images/react-min.png";
import typescript from "../images/ts-min.png";
import html from "../images/html-min.png";
import css from "../images/css-min.png";
import js from "../images/js-min.png";
import reactTesting from "../images/react-testing-library-min.png";
import jestTesting from "../images/jest-min.png";
import UserContext from "./userContext";
import UserContextVertical from "./userContextVertical";

export const TechStack = () => {
  const { verticalLine } = useContext(UserContextVertical);
  const { lineColours } = useContext(UserContext);
  return (
    <section
      className={`tech-stack-container ${verticalLine.verticalLineClass}`}
    >
      <span className="tech-stack-title-container">
        <h2>Tech Stack</h2>
      </span>
      <ul className="ul-tech">
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="react tech-name">React</li>
          <li className="tech-logo-container">
            <img src={react} alt="react logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="ts tech-name">TypeScript</li>
          <li className="tech-logo-container">
            <img src={typescript} alt="typescript logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="html tech-name">HTML</li>
          <li className="tech-logo-container">
            <img src={html} alt="html logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="css tech-name">CSS</li>
          <li className="tech-logo-container">
            <img src={css} alt="css logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="js tech-name">JavaScript</li>
          <li className="tech-logo-container">
            <img src={js} alt="javascript logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="react-testing tech-name">React Testing Library</li>
          <li className="tech-logo-container">
            <img src={reactTesting} alt="react testing library logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
        <div className="tech-container">
          <li className="jest tech-name">Jest</li>
          <li className="tech-logo-container">
            <img src={jestTesting} alt="jest testing library logo" />
          </li>
        </div>
        <li>
          <hr
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
            }}
          />
        </li>
      </ul>
    </section>
  );
};
