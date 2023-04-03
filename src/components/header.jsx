import github from "../images/github-min.png";
import mail from "../images/mail-min.png";
import linkedin from "../images/linkedin-svgrepo-com.svg";
import React, { useContext } from "react";
import UserContext from "./userContext";
import UserContextVertical from "./userContextVertical";

export const Header = ({ activePage, setActivePage, updateProjects }) => {
  const { lineColours, setLineColours } = useContext(UserContext);
  const { setVerticalLineProps } = useContext(UserContextVertical);

  function handleActivePage(page) {
    setActivePage(page);
    updateProjects("landing");
    if (page === "home") {
      setLineColours(["#1fa2ff", "#12d8fa", "#a6ffcb"]);
      setVerticalLineProps({
        verticalLineClass: "home",
      });
    }
  }

  return (
    <>
      <header>
        <span className="header-text-container">
          <p id="name">Jack Brogan</p>
          <p
            className={`home-text ${
              activePage === "home" ? "active-page" : ""
            }`}
            onClick={() => handleActivePage("home")}
          >
            Home
          </p>
        </span>
        <span className="header-imgs-container">
          <div className="icons-container">
            <a href="https://github.com/jbrogan99?tab=repositories">
              <img
                alt="github logo"
                src={github}
                className="github-icon icon-imgs"
              />
            </a>
          </div>
          <div className="icons-container">
            <a href="mailto:jack.brogan99@gmail.com?subject=Mail from NAME OF SITE">
              {" "}
              {/*Add name of live site here e.g. helpO.com*/}
              <img alt="mail logo" src={mail} className="mail-icon icon-imgs" />
            </a>
          </div>
          <div className="icons-container">
            <a href="https://www.linkedin.com/in/jack-brogan/">
              <img
                alt="linkdin logo"
                src={linkedin}
                className="linkedin-icon icon-imgs"
              />
            </a>
          </div>
        </span>
      </header>
      <hr
        style={{
          backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
        }}
      ></hr>
    </>
  );
};
