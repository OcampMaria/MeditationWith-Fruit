import React, { useState } from "react";

export default function Controls(props) {
  const data = props.data;
  const state = props.state;


  console.log(props.state);


  // State transitions
  const actions = {
    toggleNext: function () {
      console.log("something worked");
      const current = state.currentSlide;
      const next = current + 1;
      if (next > state.data.length - 1) {
        next = 0;
      }
      state.currentSlide = next;
      return(state);
    },
    togglePrev: function () {
      console.log("something worked");
      const current = state.currentSlide;
      const prev = current - 1;
      if (prev < 0) {
        prev = state.data.length - 1;
      }
      state.currentSlide = prev;
      return(state);
    },
    toggleSlide: function (id) {
      console.log("something worked");
      const index = state.data.map(function (el) {
        return el.id;
      });
      const currentIndex = index.indexOf(id);
      state.currentSlide = currentIndex;
      return(state);
    },
  };

 
const togglePrev= () => {
    actions.togglePrev();
  };

const toggleNext= () => {
    actions.toggleNext();
  };

  return (
    <div className="controls">
      <div className="toggle toggle--prev" onClick={togglePrev}>
        Prev
      </div>
      <div className="toggle toggle--next" onClick={toggleNext}>
        Next
      </div>
    </div>
  );
}
