import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import logo from "./images/orange.png";
import img1 from "./images/meditating.jpg";
import img2 from "./images/sound.jpg";
import img3 from "./images/fruits.jpg";
import { slideData } from "./SlideData";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

// require("./main.css");
require("./styles/instructions.css");

// Creating the Instructions component
export default function Instructions(props) {
  const [currentIndex, setcurrentIndex] = useState(0);
  // const [disabled, setdisabled] = useState(false);
  const [paragraphs, setparagraphs] = useState("");
  const [slideEnd, setslideEnd] = useState(false);
  const [image, setimage] = useState();

  const loadSlides = () => {
    if (currentIndex === slideData.length - 1) {
      setslideEnd(true);
    } else {
      setparagraphs(slideData[currentIndex].paragraph);
      setimage(slideData[currentIndex].imagePath);
    }
  };

  const handleClick = () => {
    console.log("yay");
    setcurrentIndex(currentIndex + 1);
  };

  const finishHandler = () => {
    slideEnd();
  };

  useEffect(() => {
    loadSlides();
  });

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

      <section className="intro-section">
        <div className="max-with">
          <h3 className="title-secondary">- Instructions -</h3>

          <div className="carousel scrollmenu">
            <div className="owl-item" id="instruction1">
              <div className="card">
                <div className="box" id="one">
                  <p className="text">{paragraphs}</p>
                  <div className="img ilustrations">
                    <a href="" className="brand-logo">
                      <img
                        className="logo-secondary ilustration"
                        src={image}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {currentIndex < slideData.length - 1 && (
                <Link to="#" className="register">
                  <button
                    type="button"
                    className="btn btn-register"
                    onClick={handleClick}
                  >
                    NEXT
                  </button>
                </Link>
              )}

              {currentIndex === slideData.length - 1 && (
                <Link to="/Signup" className="register">
                  <button
                    type="button"
                    className="btn btn-register"
                    onClick={finishHandler}
                  >
                    NEXT
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
