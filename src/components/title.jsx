import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const Title = ({ title, showElement }) => {
  //destructure props
  return (
    <section className="wrapper">
      <div>
        <h1>{title}</h1>
      </div>
    </section>
  );
};
