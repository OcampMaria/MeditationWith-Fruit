import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

require("./main.css");
require("./styles/about.css")


// Creating the Main component
export default class About extends Component {
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


       
        <Footer/>
      </div>
    );
  }
}
