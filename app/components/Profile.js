import React, { Component } from "react";
// import Nav from "./children/Nav";
// import Footer from "./children/Footer";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";

// require("./main.css");

// Creating the Main component
export default class Main extends Component {
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
