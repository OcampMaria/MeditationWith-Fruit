import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import * as Survey from "survey-react";

import "survey-react/survey.css";

require("./main.css");
require("./styles/about.css");

// Creating the Main component
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }

  render() {
    let json = {
      questions: [
        {
          type: "checkbox",
          name: "car",
          title: "What car are you driving?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Apple",
            "Apricots",
            "Banana",
            "Blueberries",
            "Cantaloupe",
            "Cherries",
            "Clementines",
            "Grapes",
            "Honeydew",
            "Kiwi",
            "Mango",
            "Nectarines",
            "Orange",
            "Peachers",
            "Pears",
            "Pineapple",
            "Plums",
            "Pomegranate",
            "Starfruit",
            "Strawberries",
          ],
        },
      ],
    };
    const surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    const onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;

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

        <div>hello
     
        </div>
      

        <Footer />
      </div>
    );
  }
}
