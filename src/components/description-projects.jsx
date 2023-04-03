import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

export const DescriptionProjects = ({ description, siteLink, gitHubRepo }) => {
  const { verticalLine } = useContext(UserContextVertical);
  return (
    <main className="description-container">
      <span className={`gradient side-bar ${verticalLine.verticalLineClass}`}>
        <p>{description}</p>
        <span className={"link-container"}>
          <a href={siteLink} className={`${verticalLine.verticalLineClass}`}>
            View Site
          </a>
          <a href={gitHubRepo} className={`${verticalLine.verticalLineClass}`}>
            Github
          </a>
        </span>
      </span>
    </main>
  );
};
