import React, { Component } from "react";
import { QuizData } from "./QuizData";
import { Fruits } from "./QuizData";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

require("./main.css");
require("./styles/quiz.css");


export class Quiz extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
      fruit: "",
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;

    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        fruit: Fruits[currentIndex].name,
        options: QuizData[currentIndex].options,
        // answer: QuizData[currentIndex].answer,
      };
    });
  };

  nextQuestionHander = () => {
    const { userAnswer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    // if sstatements. if useranswer is === to answer, then increase score by one.

    //Check if correct answer and increment score
    if (userAnswer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex != prevState.currentIndex) {
      this.setState(() => {
        return {
          // question: QuizData[currentIndex].question,
          fruit: Fruits[currentIndex].name,
          // options: QuizData[currentIndex].options,

          //   answer: QuizData[currentIndex].answer,
        };
      });
    }
  }

  finishHandler = () => {
    if (this.state.currentIndex === Fruits.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd, fruit } =
      this.state;
    const numbers = function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    };

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
            Your first step is to go to the store and buy 7 servings of that
            fruit so you’ll be ready to eat this week!
          </p>
          {/* <ul>
            {fruits.map((item, index) => (
              <li className="ui floating message options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul> */}
            <Link to="/">
              <button type="button" className="btn">Done</button>
            </Link>
          <Footer/>
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
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-items secondary-nav">
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <h1>{fruit}</h1>
      
        <h2>{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${Fruits.length - 1} `}</span>
        {options.map((option) => (
          <p
            key={option + numbers}
            className={`ui floating message options
            ${userAnswer === option ? "selected" : null}
            `}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        {currentIndex < Fruits.length - 1 && (
          <button
            className="btn"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {currentIndex === Fruits.length - 1 && (
          <button
            className="btn"
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >
            Finish
          </button>
        )}
        <Footer/>
      </div>
      
    );
  }
}

export default Quiz;
