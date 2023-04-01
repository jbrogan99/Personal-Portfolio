import React from "react";

export const Projects = ({ projects, setProjects }) => {
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

  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <ul>
        {Object.entries(values).map((value) => {
          /*Loop round values array*/
          return (
            <li>
              <span
                onClick={() => {
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
