import React, { useEffect, useState } from "react";
// import Footer from "./children/Footer";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Nav from "./children/Nav";

require("./main.css");

// Creating the Main component
export default function Main({props}) {

    return (
      <div className=" full-height-grow">
       

        <Helmet>
          <style>{"body { background-color: rgba(131, 166, 186, 1); }"}</style>
        </Helmet>
        <nav className="header-secondary" id="navbar">
        <a href="" className="brand-logo">
            <img className="logo" src={logo} alt="" />        
          </a>
        <nav className="">
          <button
            type="button"
            className="navbar-toggle navbar-toggle-right"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <i className="glyphicon glyphicon-menu-hamburger"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-items">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-items">
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </div>
        </nav>
      </nav>


        <section className="home-main-section">
          <div className="call-to-action">
            <h1 className="title">Meditation With Fruit</h1>
            <span className="subtitle">
              Use Psychology to Hack Your Stress Eating
            </span>

            <Link to="/instructions">
              <button type="button" className="btn">START</button>
            </Link>

            <h2>UNDER DEVELOPMENT...</h2>

            
          </div>

          <div className="img-wrapper">
            <div className="orange-feature-img"></div>
          </div>
        </section>

        <div className="home-page-circle-1"></div>
        <div className="home-page-circle-2"></div>
        <div className="home-page-circle-3"></div>

        
      </div>
    );
  
}
