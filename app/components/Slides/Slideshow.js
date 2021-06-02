import { STATES } from "mongoose";
import React, { useState } from "react";
import Slides from "./Slides";

export default function Slideshow (props) {
    // console.log(props.state); 


    return(
        <div className= "slideshow">
          {/* will later accommodate three subcomponents: Slides, Pagination and Controls (our prev/next buttons). */}
          <Slides
          data={props.data}
          state={props.state}
          />
             
        </div>
    )
}