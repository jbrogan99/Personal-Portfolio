import logo from "./logo.svg";
import React from "react";
import UserContext from "./components/userContext";
import UserContextVertical from "./components/userContextVertical";
import "./App.css";
import { Header } from "./components/header";
import { Description } from "./components/description-landing";
import { Cv } from "./components/cv";
import { Projects } from "./components/projects";
import { TechStack } from "./components/techStack";
import { Title } from "./components/title";
import { useState, createContext, useContext } from "react";
import { DescriptionProjects } from "./components/description-projects";

const descLanding =
  "Hello, I’m Jack, a Front-End Software Engineer from Wigan. Over the past 3 years I have been developing creative, accessible, responsive and functional websites. Currently finishing my university degree in web design and development May 2023!  In my spare time I enjoy socialising, keeping fit and gaming, that’s if im not coding! ";

const recipe =
  "This is a recipe application designed for students, with the aid of helping them eat more nutritional foods. Thereby, providing recommendations that accommodates the users feelings and environmental factors. Uses Spoonacular API to retrieve the meals. The application was developed using React & React Testing Library. ";
const doughnut =
  "This is a 5 Page doughnut website designed & developed from scratch.  Using Figma for the design and React for the development. Includes Animation slide shows and multiple call to action buttons to keep user flow and engagement.";
const currency =
  "This is a Currency Converter Widget that can be used on any site, It gathers the latest exchange rates via an API and updates state on the user input or drop down selection. This was developed using HTML, CCS, and vanilla JS  ";
const blackjack =
  "This is a Blackjack game that runs on the command line. This doesn't have a GUI but answers a set of scenario based questions. Using TDD allowed me to practice solving logical task when writing tests first. Developed using JavaScript and Jest.";
const ecommerce =
  "This is an E-commerce single page trainer website. It allows users to change thumbnail images to the larger main image. Users can add items to the cart, update quantity and remove items. Developed using react.  ";
const calculator =
  "This is a tip calculator that allows users to add bill amounts, add bill percentages (given or custom), and add the number of people. Returns the tip amount per person and the total bill (including tip).";

// function description(type) {
//   switch (type) {
//     case "recipe":
//       return <Description description={recipe} />;
//     case "doughnut":
//       return <Description description={doughnut} />;
//     case "currency":
//       return <Description description={currency} />;
//     case "blackjack":
//       return <Description description={blackjack} />;
//     case "ecommerce":
//       return <Description description={ecommerce} />;
//     case "calculator":
//       return <Description description={calculator} />;
//     default:
//     // return <Description description={descLanding} />;
//   }
// }

function App() {
  const [projects, setProjects] = useState({
    recipe: false,
    doughnut: false,
    currency: false,
    blackjack: false,
    ecommerce: false,
    calculator: false,
    landing: true,
  });
  const [lineColours, setLineColours] = useState([
    "#1fa2ff",
    "#12d8fa",
    "#a6ffcb",
  ]);

  const [verticalLine, setVerticalLineProps] = useState({
    verticalLineColours:
      "linear-gradient(to bottom, #1fa2ff, #12d8fa, #a6ffcb)",
    verticalLineClass: "",
  });

  const [activePage, setActivePage] = useState("welcome");

  return (
    <>
      <UserContextVertical.Provider
        value={{
          verticalLine,
          setVerticalLineProps,
        }}
      >
        <UserContext.Provider
          value={{ lineColours: lineColours, setLineColours: setLineColours }}
        >
          <Header />
          {projects.landing && <Title title="Welcome." />}
          {projects.recipe && <Title title="Recipe" />}
          {projects.doughnut && <Title title="Doughnut" />}
          {projects.currency && <Title title="Currency Converter Widget" />}
          {projects.blackjack && <Title title="Blackjack" />}
          {projects.ecommerce && <Title title="E-commerce Trainer" />}
          {projects.calculator && <Title title="Calculator" />}
          <div id="grid-desktop">
            {projects.landing && <Description description={descLanding} />}
            {projects.recipe && <DescriptionProjects description={recipe} />}
            {projects.doughnut && (
              <DescriptionProjects description={doughnut} />
            )}
            {projects.currency && (
              <DescriptionProjects description={currency} />
            )}
            {projects.blackjack && (
              <DescriptionProjects description={blackjack} />
            )}
            {projects.ecommerce && (
              <DescriptionProjects description={ecommerce} />
            )}
            {projects.calculator && (
              <DescriptionProjects description={calculator} />
            )}
            <Cv />
            <Projects
              projects={projects}
              setProjects={setProjects}
              activePage={activePage}
              setActivePage={setActivePage}
            />
            <TechStack />
          </div>
        </UserContext.Provider>
      </UserContextVertical.Provider>
    </>
  );
}

export default App;
