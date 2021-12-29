import React, { useState, useEffect } from "react";
import { slideData } from "./sessionSlides";
import { Link } from "react-router-dom";
import Footer from "../children/Footer";
import Nav from "../children/Nav";

// require("./main.css");
require("../styles/instructions.css");

// Creating the Instructions component
export default function Instructions(props) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [paragraphs, setparagraphs] = useState("");
  const [image, setimage] = useState();

  const [authenticate, setauthenticate] = useState(props);
  const [deAuthenticate, setdeAuthenticate] = useState(props);
  const [authenticated, setauthenticated] = useState(props);
  const [logout, setlogout] = useState(props);

  const loadSlides = () => {
    setparagraphs(slideData[currentIndex].paragraph);
    setimage(slideData[currentIndex].imagePath);
  };

  const handleClick = () => {
    setcurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    loadSlides();
  });

  return (
    <div className="">
      {/* <Nav
        authenticated={authenticated}
        authenticate={authenticate}
        deAuthenticate={deAuthenticate}
        logout={logout}
      /> */}
      <div className=" component-container">
        {/* home, log in */}

        {/* <section className="intro-section"> */}
        {/* <div className="max-with"> */}
        {/* <div> */}
        <h3 className="title-secondary">
          - Daily Session Instructions -
          <br />
          <span className="accent-text">
            {" "}
            Welcome to today’s relaxation session!
          </span>
        </h3>
        {/* <h1 className="title-secondary">
               
              </h1> */}
        {/* </div> */}

        <div className="carousel scrollmenu">
          <div className="owl-item" id="instruction1">
            <div className="card">
              <div className="box" id="one">
                <p className="text">{paragraphs}</p>
                <div className="img ilustrations">
                  <a href="" className="">
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
              <Link to="#" className="next">
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
              <Link to="/audioplayer" className="next">
                <button type="button" className="btn btn-register">
                  NEXT
                </button>
              </Link>
            )}
          </div>
        </div>
        {/* </div> */}
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
}
