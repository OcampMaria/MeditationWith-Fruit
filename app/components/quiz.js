// Include React
import React, { useState } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

// Here we include all of the sub-components
require("./styles/quiz.css");
require("./main.css");

// Creating the Main component
export default function Quiz() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];


  return (
    <div className="container full-height-grow">
      <header className="main-header">
        <a href="" className="brand-logo">
          <img className="logo-secondary" src={logo} alt="" />
        </a>
        <nav className="main-nav">
          <ul>           
            <li className="nav-items secondary-nav">
              <Link to={"/"}>Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {false ? (
          <div className="score-section">
            You scored 1 out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question 1</span>/{questions.length}
              </div>
              <div className="question-text">
                This is where the question text should go
              </div>
            </div>
            <div className="answer-section">
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
            </div>
          </>
        )}
      </div>

      <Footer/>
    </div>
  );
}
