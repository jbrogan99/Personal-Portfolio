import github from "../images/github-min.png";
import mail from "../images/mail-min.png";
import linkedin from "../images/linkedin-svgrepo-com.svg";
import React, { useContext } from "react";
import UserContext from "./userContext";
import UserContextVertical from "./userContextVertical";

export const Header = ({ activePage, setActivePage, updateProjects }) => {
  const { lineColours, setLineColours } = useContext(UserContext); // destructure use context to obtain horizontal line colours
  const { setVerticalLineProps } = useContext(UserContextVertical); // destructure use context to obtain vertical line colours

  function handleActivePage(page) {
    setActivePage(page); // active page set to home
    updateProjects("landing"); // landing page set to true
    if (page === "home") {
      // update line colours if page is home
      setLineColours(["#1fa2ff", "#12d8fa", "#a6ffcb"]);
      setVerticalLineProps({
        verticalLineClass: "home",
      });
    }
  }

  return (
    <>
      <header>
        <div className="header-text-container">
          <p id="name">Jack Brogan</p>
          {/*check if active page is home, then set classname to active-page else empty string*/}
          <p
            className={`home-text ${
              activePage === "home" ? "active-page" : ""
            }`}
            onClick={() => handleActivePage("home")}
          >
            Home
          </p>
        </div>
        <div className="header-imgs-container">
          <div className="icons-container">
            <a
              href="https://github.com/jbrogan99?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {/*github address*/}
              <img
                alt="github logo"
                src={github}
                className="github-icon icon-imgs"
              />
            </a>
          </div>
          <div className="icons-container">
            <a
              href="mailto:jack.brogan99@gmail.com?subject=Mail-from-portfolio-jbrogan"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {/*opens up email for client with my email address pre configured*/}
              <img alt="mail logo" src={mail} className="mail-icon icon-imgs" />
            </a>
          </div>
          <div className="icons-container">
            <a
              href="https://www.linkedin.com/in/jack-brogan/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {/*linkedin address*/}
              <img
                alt="linkdin logo"
                src={linkedin}
                className="linkedin-icon icon-imgs"
              />
            </a>
          </div>
        </div>
      </header>
      {/*dynamically update line colours */}
      <hr
        style={{
          backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
        }}
      ></hr>
    </>
  );
};
