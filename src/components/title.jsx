import React from "react";

export const Title = ({ title }) => {
  return (
    <section className="wrapper">
      <div className="typewriter">
        <h1>{title}</h1>
      </div>
    </section>
  );
};
