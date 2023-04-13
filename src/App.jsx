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
import { useState } from "react";
import { DescriptionProjects } from "./components/description-projects";

// descriptions for all projects / lading page

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

function App() {
  // use state with landing page set to true so correct info shows on load
  const [projects, setProjects] = useState({
    recipe: false,
    doughnut: false,
    currency: false,
    blackjack: false,
    ecommerce: false,
    calculator: false,
    landing: true,
  });
  //line colours use state with initial colours set to show on load (horizontal)
  const [lineColours, setLineColours] = useState([
    "#1fa2ff",
    "#12d8fa",
    "#a6ffcb",
  ]);
  //line colours use state with initial colours set to show on load (vertical)
  const [verticalLine, setVerticalLineProps] = useState({
    verticalLineColours:
      "linear-gradient(to bottom, #1fa2ff, #12d8fa, #a6ffcb)",
    verticalLineClass: "",
  });

  // active page set to home to show initially to have home tag highlighted on load
  const [activePage, setActivePage] = useState("home");

  // function that takes in the project name to update to the new state that gets set to true
  const updateProjects = (projectName) => {
    const update = {
      recipe: false,
      doughnut: false,
      currency: false,
      blackjack: false,
      ecommerce: false,
      calculator: false,
      landing: false,
    };
    update[projectName] = true;
    setProjects(update);
  };

  return (
    <>
      {/*Use context provider allows all components contained to have access to the context set, passing in the values to the value keyword */}
      <UserContextVertical.Provider
        value={{
          verticalLine,
          setVerticalLineProps,
        }}
      >
        <UserContext.Provider
          value={{ lineColours: lineColours, setLineColours: setLineColours }}
        >
          <Header
            activePage={activePage}
            setActivePage={setActivePage}
            updateProjects={updateProjects}
          />
          {/*show title of the page set to true*/}
          {projects.landing && <Title title="Welcome." />}
          {projects.recipe && <Title title="Recipe" />}
          {projects.doughnut && <Title title="Doughnut" />}
          {projects.currency && <Title title="Currency Converter Widget" />}
          {projects.blackjack && <Title title="Blackjack" />}
          {projects.ecommerce && <Title title="E-commerce Trainer" />}
          {projects.calculator && <Title title="Calculator" />}
          <div id="grid-desktop">
            {/*show description of the page set to true */}
            {projects.landing && <Description description={descLanding} />}
            {projects.recipe && (
              <DescriptionProjects // pass state down to components
                projects={projects}
                description={recipe}
                gitHubRepo="https://github.com/jbrogan99/recipe-app"
                siteLink="https://recipe-jbrogan.netlify.app"
              />
            )}
            {projects.doughnut && (
              <DescriptionProjects
                projects={projects}
                description={doughnut}
                gitHubRepo="https://github.com/jbrogan99/doughnuts-responsive"
                siteLink="https://doughnuts-jbrogan.netlify.app"
              />
            )}
            {projects.currency && (
              <DescriptionProjects
                projects={projects}
                description={currency}
                gitHubRepo="https://github.com/jbrogan99/currency-converter-widget"
                siteLink="https://currency-converter-jbrogan.netlify.app"
              />
            )}
            {projects.blackjack && (
              <DescriptionProjects
                projects={projects}
                description={blackjack}
                gitHubRepo="https://github.com/jbrogan99/blackjack"
              />
            )}
            {projects.ecommerce && (
              <DescriptionProjects
                projects={projects}
                description={ecommerce}
                gitHubRepo="https://github.com/jbrogan99/E-commerce-Website"
                siteLink="https://trainers-jbrogan.netlify.app"
              />
            )}
            {projects.calculator && (
              <DescriptionProjects
                projects={projects}
                description={calculator}
                gitHubRepo="https://github.com/jbrogan99/tip-calculator"
                siteLink="https://tip-calculator-jbrogan.netlify.app"
              />
            )}
            <Cv />
            {/* pass state down to components  */}
            <Projects
              updateProjects={updateProjects}
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
