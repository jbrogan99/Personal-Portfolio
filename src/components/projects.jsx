import React, { useContext } from "react";
import UserContext from "./userContext";
export const Projects = ({ setProjects }) => {
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

  const values = {
    recipe: "Recipe",
    doughnut: "Doughnut",
    currency: "Currency Converter",
    blackjack: "Blackjack",
    ecommerce: "E-commerce Trainer",
    calculator: "Calculator",
  };

  function recipeLineColour(value) {
    if (value === "recipe") {
      setLineColours(["#FA8BFF", "#2BD2FF", "#2BFF88"]);
    }
    console.log("line colour update", lineColours);
  }
  const { lineColours, setLineColours } = useContext(UserContext);
  return (
    <section className="projects-container gradient">
      <h2>Projects</h2>
      <ul>
        {Object.entries(values).map((value) => {
          /*Loop round values array*/
          return (
            <li>
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${lineColours[0]}, ${lineColours[1]}, ${lineColours[2]})`,
                }}
                className="gradient"
                onClick={() => {
                  recipeLineColour(value[0]);
                  updateProjects(value[0]); // key
                }}
              >
                {value[1]} {/* value */}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
