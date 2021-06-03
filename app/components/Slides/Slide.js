import React, { useState } from "react";


const classNames = require("classnames");


export default function Slide (props) {
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
    </div>
  );
}
