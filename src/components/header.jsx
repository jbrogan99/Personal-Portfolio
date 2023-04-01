import React from "react";
import github from "../images/github-min.png";
import mail from "../images/mail-min.png";
import linkedin from "../images/linkedin-svgrepo-com.svg";

export const Header = () => {
  return (
    <>
      <header>
        <p id="name">Jack Brogan</p>
        <span className="header-imgs-container">
          <div className="icons-container">
            <a href="github.com/jbrogan99">
              <img alt="github logo" src={github} className="github-icon" />
            </a>
          </div>
          <div className="icons-container">
            <a href="mailto:jack.brogan99@gmail.com?subject=Mail from NAME OF SITE">
              {" "}
              {/*Add name of live site here e.g. helpO.com*/}
              <img alt="mail logo" src={mail} className="mail-icon " />
            </a>
          </div>
          <div className="icons-container">
            <a href="www.linkedin.com/in/jack-brogan">
              <img
                alt="linkdin logo"
                src={linkedin}
                className="linkedin-icon"
              />
            </a>
          </div>
        </span>
      </header>
      <hr></hr>
    </>
  );
};
