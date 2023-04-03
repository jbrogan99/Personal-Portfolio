import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

export const Cv = () => {
  const { verticalLine } = useContext(UserContextVertical);
  return (
    <section className="cv-container">
      <span className={`gradient side-bar ${verticalLine.verticalLineClass}`}>
        <p>
          Check out my{" "}
          <span>
            <a href="#" className={`cv-text ${verticalLine.verticalLineClass}`}>
              CV
            </a>
          </span>{" "}
          to see what I can bring to your company!
        </p>
      </span>
    </section>
  );
};
