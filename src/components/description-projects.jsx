import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

export const DescriptionProjects = ({
  description,
  siteLink,
  gitHubRepo,
  projects,
}) => {
  const { verticalLine } = useContext(UserContextVertical);
  return (
    <main className="description-container">
      <span className={`gradient side-bar ${verticalLine.verticalLineClass}`}>
        <p>{description}</p>
        <span className={"link-container"}>
          {!projects.blackjack ? (
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className={`${verticalLine.verticalLineClass}`}
            >
              View Site
            </a>
          ) : null}

          <a
            href={gitHubRepo}
            target="_blank"
            rel="noreferrer"
            className={`${verticalLine.verticalLineClass}`}
          >
            Github
          </a>
        </span>
      </span>
    </main>
  );
};
