import React, { useState } from "react";
import { TitleActions } from "survey-react";

const classNames = require("classnames");

export default function Controls(props) {
  // State transitions
  var actions = {
    toggleNext: function () {
      console.log("something worked");
      var current = state.currentSlide;
      var next = current + 1;
      if (next > state.data.length - 1) {
        next = 0;
      }
      state.currentSlide = next;
      render(state);
    },
    togglePrev: function () {
      console.log("something worked");
      var current = state.currentSlide;
      var prev = current - 1;
      if (prev < 0) {
        prev = state.data.length - 1;
      }
      state.currentSlide = prev;
      render(state);
    },
    toggleSlide: function (id) {
      console.log("something worked");
      var index = state.data.map(function (el) {
        return el.id;
      });
      var currentIndex = index.indexOf(id);
      state.currentSlide = currentIndex;
      render(state);
    },
  };

  // Prev and Next buttons
  togglePrev: () => {
    actions.togglePrev();
  };

  toggleNext: () => {
    actions.toggleNext();
  };

  return (
    <div className="controls">
      <div className="toggle toggle--prev" onClick={this.togglePrev}>
        Prev
      </div>
      <div className="toggle toggle--next" onClick={this.toggleNext}>
        Next
      </div>
    </div>
  );
}
