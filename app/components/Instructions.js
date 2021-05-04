import React, { Component } from "react";
import logo from "./images/orange.png";
import img1 from "./images/meditating.jpg";
import img2 from "./images/sound.jpg";
import img3 from "./images/fruits.jpg";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

// require("./main.css");
require("./styles/instructions.css");

// Creating the Main component
export default class Instructions extends Component {
  
  handleClick = () => {
    console.log("this is:", this);

  };

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
                <Link to={"/"}>Home</Link>
              </li>
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
              <div className="owl-item" id="instruction1">
                <div className="card">
                  <div className="box" id="one">
                    <p className="text">
                      A lot of people are really stressed right now. One way
                      people deal with stress is eating. Our program is designed
                      to help people reduce their stress and get in some
                      servings of fruit at the same time!
                    </p>
                    <div className="img ilustrations">
                      <a href="" className="brand-logo">
                        <img
                          className="logo-secondary ilustration"
                          src={img1}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <Link to="#" className="register">
                  <button
                    type="button"
                    className="btn btn-register"
                    onClick={() => this.handleClick()}
                  >
                    NEXT
                  </button>
                </Link> */}
                <Link to="./signup" className="register">
                  <button type="button" className="btn btn-register">
                    Register
                  </button>
                </Link>
              </div>

              <div className="owl-item display" id="instruction2">
                <div className="card">
                  <div className="box" id="one">
                    <p className="text">
                      In this 1 week program, you’ll start out by answering some
                      questions that will help us pick the fruit that will be
                      most effective in helping you de-stress. Then, once a day,
                      you’ll listen to a lovely relaxing 6-minute exercise and
                      eat your customized fruit at the end.
                    </p>
                    <div className="img ilustrations">
                      <a href="" className="brand-logo">
                        <img
                          className="logo-secondary ilustration"
                          src={img2}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="#" className="register">
                  <button type="button" className="btn btn-register">
                    NEXT
                  </button>
                </Link>
              </div>

              <div className="owl-item display" id="instruction3">
                <div className="card">
                  <div className="box" id="one">
                    <p className="text">
                      Repeat 7 days. Our Research shows that simply eating your
                      fruit will help bring that sense of relaxation
                      automatically! It’s a #bodyhack that we hope will help
                      manage stress and eat more fruit.
                    </p>
                    <div className="img ilustrations">
                      <a href="" className="brand-logo">
                        <img
                          className="logo-secondary ilustration"
                          src={img3}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="#" className="register">
                  <button type="button" className="btn btn-register">
                    NEXT
                  </button>
                </Link>
              </div>

              <div className="display">
                <Link to="./signup" className="register">
                  <button type="button" className="btn btn-register">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
