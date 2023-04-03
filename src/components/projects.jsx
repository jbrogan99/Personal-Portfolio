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
      setLineColours([
        "rgba(252, 37, 103, 1)",
        "rgba(250, 38, 151, 1)",
        "rgba(186, 8, 181, 1)",
      ]);
      setVerticalLineProps({
        verticalLineClass: "recipe",
      });
    } else if (value === "doughnut") {
      setLineColours(["#642b73", "#812d73", "#c6426e"]);
      setVerticalLineProps({
        verticalLineClass: "doughnut",
      });
    } else if (value === "currency") {
      setLineColours(["#304352", "#607686", "#d7d2cc"]);
      setVerticalLineProps({
        verticalLineClass: "currency",
      });
    } else if (value === "blackjack") {
      setLineColours(["#2980b9", "#d0f2ff", "#ffffff"]);
      setVerticalLineProps({
        verticalLineClass: "blackjack",
      });
    } else if (value === "ecommerce") {
      setLineColours(["#a8ff78", "#78ffd6", "#b6ffe9"]);
      setVerticalLineProps({
        verticalLineClass: "ecommerce",
      });
    } else if (value === "calculator") {
      setLineColours(["#ffefba", "#fff5d3", "#ffffff"]);
      setVerticalLineProps({
        verticalLineClass: "calculator",
      });
    }
  }
  // console.log("line colour update", lineColours);
  // console.log("vlaue,", value);

  const { lineColours, setLineColours } = useContext(UserContext);
  const { setVerticalLineProps } = useContext(UserContextVertical);
  const { verticalLine } = useContext(UserContextVertical);
  return (
    <section
      className={`projects-container gradient ${verticalLine.verticalLineClass}`}
    >
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
