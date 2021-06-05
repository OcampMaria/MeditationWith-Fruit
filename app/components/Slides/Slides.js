import React, { useState } from "react";
import Slide from "./Slide";



export default function Slides (props) {
    const data = props.data
    const state = props.state
    // console.log(state); 


    const slideNodes = data.map((slideNode, index) => {
        const isActive = state.currentSlide === index;
        return(
            <Slide
            active={isActive}
            key={slideNode.id}
            imagePath={slideNode.imagePath}
            paragraph={slideNode.paragraph}
            data={data}
            state={state}
            />
        );       
    });

    return(
        <div className = "slides">
            {slideNodes}
        </div>
    );
  
}