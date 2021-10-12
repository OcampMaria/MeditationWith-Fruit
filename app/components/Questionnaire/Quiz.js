import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuizData } from "./QuizData";
import { Fruits } from "./QuizData";
import { Link } from "react-router-dom";
import Footer from "../children/Footer";
import { log } from "debug";
import Nav from "../children/Nav";

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
  const [image, setimage] = useState("");

  //setting up localStorage

  const dropHistory = JSON.parse(localStorage.getItem("fruitItems")) || [];

  //selecting fruit with highest score
  // Note: add if max === 0 return "empty" & if two fruits equal the max number ask extra question
  const getHighestFruit = () => {
    if (dropHistory == ![]) {
      // console.log("empty");
      setfruit("");
    } else {
      const max = Math.max.apply(
        Math,
        dropHistory.map((item) => {
          return item.score;
        })
      );

      const found = dropHistory.filter((x) => x.score == max);

      const foundFruit = found[0].name;

      setfruit(foundFruit);

      for (let i = 0; i < Fruits.length; i++) {
        if (Fruits[i].name === foundFruit) {
          // console.log(Fruits[i].name);
          console.log(Fruits[i].name);
          setimage(Fruits[i].image);
        } else {
          setimage("");
        }
      }
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
      setimage(Fruits[fruitIndex].image);
    }
  };

  //save fruitItems to local storage if statement is true
  const savefruit = () => {
    if (QuizData[1].id === currentIndex) {
      const drop = {
        name: Fruits[fruitIndex].name,
        score: userAnswer,
        img: Fruits[fruitIndex].image,
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

  // const assignFruit = (userData) => {
  //   axios.post("/apis/fruits/createFruit", {
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

 

  const finishHandler = () => {
  
    if (currentIndex === Fruits.length - 2) {
      setquizEnd(true);
      savefruit();
      getHighestFruit();
      console.log("hello!!");
    }
  };

  const clearLocal = () => {
    localStorage.clear();
  };

  //part of unique id for answer options
  const numbers = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    loadQuiz();
  });

  if (quizEnd) {
    return (
      <div>
        <Nav />
        <div className="full-height-grow quiz-div">
          <div className="img ilustration">
            <a href="" className="">
              <img className="logo-secondary" src={image} alt="" />
            </a>
          </div>
          <h2>
            Based on your responses, the fruit that will be most effective for
            this program is {fruit}.
          </h2>
          <p>
            Your first step is to go to the store and buy 7 servings of that
            fruit so you’ll be ready to eat this week!
          </p>

          <Link to="/profile">
            <button type="button" className="btn" onClick={clearLocal}>
              Done
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="full-height-grow quiz-div">
        <span>{`Question ${fruitIndex + 1} of ${Fruits.length}`}</span>

        <h1>{fruit}</h1>
        <div className="img ilustration">
          <a href="" className="">
            <img className="logo-secondary " src={image} alt="" />
          </a>
        </div>

        <h2>{question}</h2>

        <div className="option-div">
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
        </div>

        {fruitIndex < Fruits.length - 1 && (
          <button
            className="ui inverted btn"
            disabled={disabled}
            onClick={nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {fruitIndex === Fruits.length - 1 &&
          currentIndex === QuizData.length - 2 && (
            <button
              className="ui inverted btn"
              disabled={disabled}
              onClick={nextQuestionHander}
            >
              Next Question
            </button>
          )}

        {fruitIndex === Fruits.length - 1 &&
          currentIndex === QuizData.length - 1 && (
            <button
              className="ui inverted btn"
              disabled={disabled}
              onClick={finishHandler}
            >
              Finish
            </button>
          )}
      </div>
      <Footer />
    </div>
  );
}
