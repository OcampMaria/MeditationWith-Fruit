import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/orange.png";
require("./nav.css");

export default class Nav extends Component {
  render() {
    return (
      <nav className="header-secondary" id="navbar">
        <a href="" className="brand-logo">
          <img className="logo-secondary" src={logo} alt="" />
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
              <li className="nav-items active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-items active">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-items active">
                <a className="nav-item nav-link" href="/audioplayer">
                  Session
                </a>
              </li>
              <li className="nav-items active">
                <a className="nav-link" href="/quiz">
                  Take Quiz
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    );
  }
}
