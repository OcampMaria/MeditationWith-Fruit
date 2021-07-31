import React, { useState, useEffect } from "react";
// import Nav from "../Children/Nav"
import { slideData } from "./SlideData";
import { Link } from "react-router-dom";
import Footer from "../children/Footer";
import Nav from "../children/Nav"


// require("./main.css");
require("../styles/instructions.css");

// Creating the Instructions component
export default function Instructions(props) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [paragraphs, setparagraphs] = useState("");
  const [image, setimage] = useState();

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
    <div className="full-height-grow">
      <Nav/>
      <div className=" component-container">
        {/* home. login */}

        {/* <section className="intro-section "> */}
          {/* <div className="max-with"> */}
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
                  <Link to="/Signup" className="next">
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