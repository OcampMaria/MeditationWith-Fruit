import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

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
            <h3 className="title-secondary">- Instructions -</h3>

            <div className="carousel scrollmenu">
              <div className="owl-item ">
                <div className="card">
                  <div className="box" id="one">
                    <p className="text">
                      A lot of people are really stressed right now. One way
                      people deal with stress is eating. Our program is designed
                      to help people reduce their stress and get in some
                      servings of fruit at the same time!
                    </p>
                    <div className="img">
                      <a href="" className="brand-logo">
                        <img className="logo-secondary" src={logo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/signup" className="register">
                <button type="button" className="btn btn-register">
                  NEXT
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
