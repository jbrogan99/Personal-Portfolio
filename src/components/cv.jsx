import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

export const Cv = () => {
  const { verticalLine } = useContext(UserContextVertical); // destructure use context to obtain vl classname
  return (
    <section className="cv-container">
      <div className={`gradient side-bar ${verticalLine.verticalLineClass}`}>
        {" "}
        {/*applying vl classname*/}
        <p>
          Check out my{" "}
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://jack-brogan-cv.netlify.app/"
              className={`cv-text ${verticalLine.verticalLineClass}`}
            >
              {" "}
              {/*applying vl classname*/}
              CV
            </a>
          </span>{" "}
          to see what I can bring to your company!
        </p>
      </div>
    </section>
  );
};
