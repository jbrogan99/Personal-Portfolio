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
  const { verticalLine } = useContext(UserContextVertical); // destructure vl
  const { lineColours } = useContext(UserContext); // destructure line colours
  return (
    <section
      className={`tech-stack-container ${verticalLine.verticalLineClass}`}
    >
      {" "}
      {/*add vl class*/}
      <div className="tech-stack-title-container">
        <h2>Tech Stack</h2>
      </div>
      <aside className="ul-tech">
        {/*dynamically change line colours*/}
        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />
        <div className="tech-container">
          <p className="react tech-name">React</p>
          <div className="tech-logo-container">
            <img src={react} alt="react logo" />
          </div>
        </div>

        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />

        <div className="tech-container">
          <p className="ts tech-name">TypeScript</p>
          <div className="tech-logo-container">
            <img src={typescript} alt="typescript logo" />
          </div>
        </div>

        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />

        <div className="tech-container">
          <p className="html tech-name">HTML</p>
          <div className="tech-logo-container">
            <img src={html} alt="html logo" />
          </div>
        </div>

        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />

        <div className="tech-container">
          <p className="css tech-name">CSS</p>
          <div className="tech-logo-container">
            <img src={css} alt="css logo" />
          </div>
        </div>

        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />

        <div className="tech-container">
          <p className="js tech-name">JavaScript</p>
          <div className="tech-logo-container">
            <img src={js} alt="javascript logo" />
          </div>
        </div>

        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />

        <div className="tech-container">
          <p className="react-testing tech-name">React Testing Library</p>
          <div className="tech-logo-container">
            <img src={reactTesting} alt="react testing library logo" />
          </div>
        </div>
        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />
        <div className="tech-container">
          <p className="jest tech-name">Jest</p>
          <div className="tech-logo-container">
            <img src={jestTesting} alt="jest testing library logo" />
          </div>
        </div>
        <hr
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
          }}
        />
      </aside>
    </section>
  );
};
