import React, { useContext } from "react";
import UserContext from "./userContext";

export const Cv = () => {
  const { lineColours } = useContext(UserContext);
  return (
    <section className="cv-container">
      <span
        style={{
          backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
        }}
        className="side-bar gradient"
      >
        <p>
          Check out my{" "}
          <span>
            <a href="#" className="gradient">
              CV
            </a>
          </span>{" "}
          to see what I can bring to your company!
        </p>
      </span>
    </section>
  );
};
