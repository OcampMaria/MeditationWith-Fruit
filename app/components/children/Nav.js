import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./nav.css");

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              <i className="fa fa-bars"></i>
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

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <a className="page-scroll nav-right-text" href="/trips">
                  <p>New Session</p>
                </a>
              </li>
              <li>
                <Link to={"/quiz"}>
                  <div
                    className="page-scroll nav-left-text"
                    data-toggle="modal"
                  >
                    <p>Take Quiz</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <div
                    className="page-scroll nav-left-text"
                    data-toggle="modal"
                  >
                    <p>Log-in</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/audioplayer"}>
                  <div
                    className="page-scroll nav-left-text"
                    data-toggle="modal"
                  >
                    <p>AudioPlayer</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
