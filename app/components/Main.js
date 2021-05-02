import React, { Component } from "react";
// import Nav from "./children/Nav";
// import Footer from "./children/Footer";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

require("./main.css");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div className="container full-height-grow">
        {/* <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}

        <Helmet>
          <style>{"body { background-color: rgba(131, 166, 186, 1); }"}</style>
        </Helmet>

        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo" src={logo} alt="" />        
          </a>
          <nav className="main-nav">
            <ul>
              <li className="nav-items">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-items">
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="home-main-section">
          <div className="call-to-action">
            <h1 className="title">6 Minutes With Fruit</h1>
            <span className="subtitle">
              Use Psychology to Hack Your Stress Eating
            </span>

            <Link to="/instructions">
              <button type="button" className="btn">START</button>
            </Link>

            
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
}
