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

      // <header className="main-header">
      //   <a href="" className="brand-logo">
      //     <img className="logo-secondary" src={logo} alt="" />
      //   </a>
      //   <nav className="main-nav" role="navigation">
      //     <div className=" nav-container">
      //       <div className="navbar-header">
      //         <button
      //           type="button"
      //           className="navbar-toggle"
      //           data-toggle="collapse"
      //           data-target=".navbar-main-collapse"
      //         ></button>
      //         <button
      //           type="button"
      //           className="navbar-toggle navbar-toggle-right"
      //           data-toggle="collapse"
      //           data-target=".navbar-main-collapse1"
      //         >
      //           <i className="glyphicon glyphicon-menu-hamburger"></i>
      //         </button>
      //       </div>

      //       <div className="collapse navbar-collapse navbar-main-collapse1">
      //         <ul className="nav navbar-nav mr-auto">
      //           <li className="hidden nav-item active">
      //             <a href="#page-top"></a>
      //           </li>
      //           <li className="nav-items nav-item secondary-nav">
      //             <a className="page-scroll nav-right-text" href="/profile">
      //               <p>Profile</p>
      //             </a>
      //           </li>
      //           <li className="nav-items secondary-nav">
      //             <a className="page-scroll nav-right-text" href="/quiz">
      //               <p>Take Quiz</p>
      //             </a>
      //           </li>
      //           <li className="nav-items secondary-nav">
      //             <a className="page-scroll nav-right-text" href="/login">
      //               <p>Log In</p>
      //             </a>
      //           </li>
      //           <li className="nav-items secondary-nav">
      //             <a className="page-scroll nav-right-text" href="/audioplayer">
      //               <p>AudioPlayer</p>
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </header>
    );
  }
}