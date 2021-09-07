import React, { useState, useEffect } from "react";
import Nav from "./children/Nav";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import fruits from "./images/Fruits/fruits_background.png";
import apple from "./images/Fruits/apples.png";

// require("./main.css");
require("./styles/profile.css");

export default function Profile({ props }) {
  const [authenticate, setauthenticate] = useState(props);
  const [deAuthenticate, setdeAuthenticate] = useState(props);
  const [authenticated, setauthenticated] = useState(props);
  const [logout, setlogout] = useState(props);


  return (
    <div className=" full-height-grow">
      <Nav
          authenticated={authenticated}
          authenticate={authenticate}
          deAuthenticate={deAuthenticate}
          logout={logout}
      />
      <div className="">
        {/* <section className="profile-section"> */}
        <div className="max-with">
          <div className="session">
            <h3 className="title-secondary">- Welcome Back {}! -</h3>
            <h3 className="title-mobile">Welcome Back {}!</h3>

            <div>
              <p className="subtitle-profile">New Session</p>

              <Link to="/sessioninstructions" className="new-session">
                <button type="button" className="btn-session">
                  +
                </button>
              </Link>

              <div className="fruit-img">
                <a href="" className="image-line">
                  <img className="profile-images" src={fruits} alt="" />
                </a>
                <a href="" className="image-line">
                  <img className="profile-images" src={fruits} alt="" />
                </a>
                <a href="" className="image-line">
                  <img className="profile-images " src={fruits} alt="" />
                </a>
              </div>

              <div className="cards">
                <div className="wrap">
                  <div className="one">
                    <div className="card">
                      <div className="box">
                        <p className="text">example</p>
                        <div className="img ilustration">
                          <a href="" className="">
                            <img
                              className="logo-secondary"
                              src={apple}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="one">
                    <div className="card">
                      <div className="box">
                        <p className="text">example</p>

                        <div className="img ilustration">
                          <a href="" className="">
                            <img
                              className="logo-secondary"
                              src={apple}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
}
