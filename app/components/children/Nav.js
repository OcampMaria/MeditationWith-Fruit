import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/orange.png";
require("./nav.css");

export default class Nav extends Component {
  render() {
    return (
      <header className="main-header">
         <a href="" className="brand-logo">
            <img className="logo-secondary" src={logo} alt="" />
          </a>
        <nav className="main-nav" role="navigation">
       
        <div className=" nav-container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
             
            </button>
            <button
              type="button"
              className="navbar-toggle navbar-toggle-right"
              data-toggle="collapse"
              data-target=".navbar-main-collapse1"
            >
              <i className="glyphicon glyphicon-plus"></i>
            </button>
          </div>

          <div className="collapse navbar-collapse navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="nav-items secondary-nav">
                <a className="page-scroll nav-right-text" href="/profile">
                  <p>Profile</p>
                </a>
              </li>
              <li  className="nav-items secondary-nav">
              <a className="page-scroll nav-right-text" href="/quiz">
                  <p>Take Quiz</p>
                </a>
                
              </li>
              <li  className="nav-items secondary-nav">
              <a className="page-scroll nav-right-text" href="/login">
                  <p>Log In</p>
                </a>
                
              </li>
              <li  className="nav-items secondary-nav">
              <a className="page-scroll nav-right-text" href="/audioplayer">
                  <p>AudioPlayer</p>
                </a>
                
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>

      </header>
      
    );
  }
}
