import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuizData } from "./QuizData";
import { Fruits } from "./QuizData";
import logo from "../images/orange.png";
import { Link } from "react-router-dom";
import Footer from "../children/Footer";
import { log } from "debug";

require("../main.css");
require("../styles/quiz.css");

export default function Quiz() {
  //setting up state
  const [userAnswer, setuserAnswer] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [fruitIndex, setfruitIndex] = useState(0);
  const [options, setoptions] = useState([]);
  const [quizEnd, setquizEnd] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [question, setquestion] = useState("");
  const [fruit, setfruit] = useState("");

  //setting up localStorage

  const dropHistory = JSON.parse(localStorage.getItem("fruitItems")) || [];

  //selecting fruit with highest score
  const getHighestFruit = () => {
    if (dropHistory == ![]) {
      console.log("empty");
    } else {
      const max = Math.max.apply(
        Math,
        dropHistory.map((item) => {
          return item.score;
        })
      );
      console.log(max);

      const found = dropHistory.filter((x) => x.score == max);

      const foundFruit = found[0].name;
      console.log(foundFruit);
    }
  };

  const loadQuiz = () => {
    if (
      (currentIndex === Fruits.length - 1 &&
        currentIndex === QuizData.length - 1) ||
      fruitIndex === Fruits.length
    ) {
      setquizEnd(true);
      savefruit();
      getHighestFruit();
    } else {
      setquestion(QuizData[currentIndex].question);
      setoptions(QuizData[currentIndex].options);
      setfruit(Fruits[fruitIndex].name);
    }
  };

  //save fruitItems to local storage if statement is true
  const savefruit = () => {
    if (QuizData[1].id === currentIndex) {
      const drop = {
        name: Fruits[fruitIndex].name,
        score: userAnswer,
      };

      //setting up localStorage
      dropHistory.push(drop);
      localStorage.setItem("fruitItems", JSON.stringify(dropHistory));
    }
  };

  const nextQuestionHander = () => {
    savefruit();

    if (currentIndex === QuizData.length - 1) {
      setcurrentIndex(0);
      setfruitIndex(fruitIndex + 1);
      setquestion(QuizData[currentIndex].question);

      setdisabled(true);
    } else if (
      currentIndex === 0 &&
      userAnswer === QuizData[currentIndex].options[1]
    ) {
      setfruitIndex(fruitIndex + 1);
      setdisabled(true);
    } else {
      setcurrentIndex(currentIndex + 1);
      setdisabled(true);
    }
  };

  //Adds state to user answer on click.
  const checkAnswer = (answer) => {
    setuserAnswer(answer);
    setdisabled(false);
  };

  const finishHandler = () => {
    if (currentIndex === Fruits.length - 2) {
      setquizEnd(true);
      savefruit();
      getHighestFruit();
    }
  };

  const clearLocal = () => {
    localStorage.clear();
  };

  //part of unique id for answer options
  const numbers = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  // const assignFruit = (userData) => {
  //   axios.post("/apis/users/fruit", {
  //    fruit:userData.fruit
  //   }).then (
  //     (data)=> {
  //       if (data){
  //         console.log(data)
  //       }
  //     }
  //   ).catch(function (err) {
  //     console.log(err);
  //   });

  // }

  useEffect(() => {
    loadQuiz();
  });

  if (quizEnd) {
    return (
      <div className="container full-height-grow">
        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo-secondary" src={logo} alt="" />
          </a>
          <nav className="main-nav">
            <ul>
              <li className="nav-items secondary-nav">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-items secondary-nav">
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </nav>
        </header>
        <h2>
          Based on your responses, the fruit that will be most effective for
          this program is {fruit}.
        </h2>
        <p>
          Your first step is to go to the store and buy 7 servings of that fruit
          so you’ll be ready to eat this week!
        </p>

        <Link to="/profile">
          <button type="button" className="btn" onClick={clearLocal}>
            Done
          </button>
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container full-height-grow">
      <header className="main-header">
        <a href="" className="brand-logo">
          <img className="logo-secondary" src={logo} alt="" />
        </a>
        <nav className="main-nav">
          <ul>
            <li className="nav-items secondary-nav">
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li className="nav-items secondary-nav">
              <Link to={"/"}>Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>

      <h1>{fruit}</h1>
      <h2>{question}</h2>

      <span>{`Question ${fruitIndex + 1} of ${Fruits.length}`}</span>
      {options.map((option) => (
        <p
          key={option + numbers}
          className={`ui floating message options
            ${userAnswer === option ? "selected" : null}
            `}
          onClick={() => checkAnswer(option)}
        >
          {option}
        </p>
      ))}
      {fruitIndex < Fruits.length - 1 && (
        <button
          className="ui inverted button"
          disabled={disabled}
          onClick={nextQuestionHander}
        >
          Next Question
        </button>
      )}
      {fruitIndex === Fruits.length - 1 &&
        currentIndex === QuizData.length - 2 && (
          <button
            className="ui inverted button"
            disabled={disabled}
            onClick={nextQuestionHander}
          >
            Next Question
          </button>
        )}

      {fruitIndex === Fruits.length - 1 &&
        currentIndex === QuizData.length - 1 && (
          <button
            className="ui inverted button"
            disabled={disabled}
            onClick={finishHandler}
          >
            Finish
          </button>
        )}
      {/* <Footer /> */}
    </div>
  );
}
