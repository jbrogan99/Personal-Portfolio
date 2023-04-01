import React, { useContext } from "react";
import UserContext from "./userContext";
import UserContextVertical from "./userContextVertical";
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
      setVerticalLineProps({
        verticalLineColours: `linear-gradient(to bottom,#FA8BFF, #2BD2FF, #2BFF88)`,
        verticalLineClass: "clicked",
      });
    } else if (value === "doughnut") {
      setLineColours(["#FF9A8B", "#FF6A88", "#FF99AC"]);
      setVerticalLineProps({
        verticalLineColours: `linear-gradient(to bottom,#FF9A8B, #FF6A88, #FF99AC)`,
        verticalLineClass: "doughnut",
      });
    }
  }
  // console.log("line colour update", lineColours);
  // console.log("vlaue,", value);

  const { lineColours, setLineColours } = useContext(UserContext);
  const { setVerticalLineProps } = useContext(UserContextVertical);
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
