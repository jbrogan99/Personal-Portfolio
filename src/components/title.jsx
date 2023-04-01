import React, { useContext } from "react";
import UserContext from "./userContext";

export const Title = ({ title }) => {
  const { lineColours } = useContext(UserContext);
  return (
    <section className="wrapper">
      <div className="typewriter">
        <h1>{title}</h1>
      </div>
    </section>
  );
};
