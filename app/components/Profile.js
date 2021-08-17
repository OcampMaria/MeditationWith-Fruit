import React, { useEffect, useState } from "react";
import Nav from "./children/Nav";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import fruits from "./Images/Fruits/fruits_background.png";

// require("./main.css");
require("./styles/profile.css");

export default function Profile() {
  return (
    <div className=" full-height-grow">
      <Nav />
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
                <a href="" className="brand-logo">
                  <img className="profile-images" src={fruits} alt="" />
                </a>
                <a href="" className="brand-logo">
                  <img
                    className="profile-images"
                    src={fruits}
                    alt=""
                  />
                </a>
                <a href="" className="brand-logo">
                  <img
                    className="profile-images "
                    src={fruits}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="wrap">
              <div className="one">
                <div className="card">
                  <div className="box">
                    <p className="text">kkk</p>
                    <div className="img ">
                      <a href="" className="">
                        <img className=" ilustration" src={img1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            
            </div> */}
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
}
