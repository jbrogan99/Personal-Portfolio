import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

export const Description = ({ description, siteLink, gitHubRepo }) => {
  const { verticalLine } = useContext(UserContextVertical);
  return (
    <main className="description-container">
      <span className={`gradient side-bar ${verticalLine.verticalLineClass}`}>
        <p>{description}</p>
      </span>
    </main>
  );
};
