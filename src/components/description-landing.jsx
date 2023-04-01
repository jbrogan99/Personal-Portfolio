import React from "react";

export const Description = ({ description }) => {
  return (
    <main className="description-container">
      <span className="side-bar">
        <p>{description}</p>
      </span>
    </main>
  );
};
