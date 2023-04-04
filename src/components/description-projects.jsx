import React, { useContext } from "react";
import UserContextVertical from "./userContextVertical";

// destructure
export const DescriptionProjects = ({
  description,
  siteLink,
  gitHubRepo,
  projects,
}) => {
  const { verticalLine } = useContext(UserContextVertical); // destructure use context to obtain vl classname
  return (
    <main className="description-container">
      <div className={`gradient side-bar  ${verticalLine.verticalLineClass}`}>
        {" "}
        {/*applying vl classname*/}
        <p>{description}</p>
        <div className={"link-container"}>
          {/*If blackjack is not true then add a view site link on all other projects*/}
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
        </div>
      </div>
    </main>
  );
};
