import React, { useState } from "react";
import Controls from "./Controls";

const classNames = require("classnames");

export default function Slide(props) {
  const data = props.data;
  const state = props.state;

  const classes = classNames({
    slide: true,
    "slide--active": props.active,
  });

  return (
    <div className={classes}>
      <img
        src={props.imagePath}
        // alt={props.imageAlt}
      />
      <p>{props.paragraph}</p>

      <Controls data={data} state={state} />
    </div>
  );
}
