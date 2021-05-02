import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";

require("./main.css");
require("./styles/instructions.css");

// Creating the Main component
export default class Instructions extends Component {
  render() {
    return (
      <div className="container full-height-grow">
        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo-secondary" src={logo} alt="" />
          </a>
          <nav className="main-nav">
            <ul>
              <li className="nav-items secondary-nav">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-items secondary-nav">
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="intro-section">
          <div className="max-with">
            <h2 className="title-secondary">Instructions</h2>

            <div className="carousel scrollmenu">
              <div className="owl-item ">
                <div className="card">
                  <div className="box "></div>
                </div>
                <div className="card">
                  <div className="box"></div>
                </div>
                <div className="card">
                  <div className="box"></div>
                </div>
              </div>
            </div>
          </div>


        </section>

        <Link to="/signup" className="register">
          <button type="button" className="btn btn-register">
            REGISTER
          </button>
        </Link>
        
      </div>
    );
  }
}
