import React, { useContext } from "react";
import UserContext from "./userContext";

export const Description = ({ description }) => {
  const { lineColours } = useContext(UserContext);
  return (
    <main className="description-container">
      <span className="gradient side-bar">
        <p>{description}</p>
      </span>
    </main>
  );
};
