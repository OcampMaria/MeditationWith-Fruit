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
      questionText: "Is this fruit available in your store and affordable to you?",
      answerOptions: [
        // { answerText: "New York", isCorrect: false },
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true },
        // { answerText: "Dublin", isCorrect: false },
        //add alert of code that if they select yes, the next question sequence appears
      ],
    },
    {
      questionText: "How familiar is this fruit to you? (Scale of 1-10)",
      answerOptions: [
        { answerText: "1", isCorrect: true},
        { answerText: "2", isCorrect: true},
        { answerText: "3", isCorrect: true},
        { answerText: "4", isCorrect: true},
        { answerText: "5", isCorrect: true},
        { answerText: "6", isCorrect: true},
        { answerText: "7", isCorrect: true},
        { answerText: "8", isCorrect: true},
        { answerText: "9", isCorrect: true},
        { answerText: "10", isCorrect: true},

      ],
    },
    {
      questionText: "How much do you like this fruit? (Scale of 1-10)",
      answerOptions: [
        { answerText: "1", isCorrect: true},
        { answerText: "2", isCorrect: true},
        { answerText: "3", isCorrect: true},
        { answerText: "4", isCorrect: true},
        { answerText: "5", isCorrect: true},
        { answerText: "6", isCorrect: true},
        { answerText: "7", isCorrect: true},
        { answerText: "8", isCorrect: true},
        { answerText: "9", isCorrect: true},
        { answerText: "10", isCorrect: true},

      ],
    },
  ];

const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
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

      <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
          
					Your fruit {score} is {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

      <Footer/>
    </div>
  );
}