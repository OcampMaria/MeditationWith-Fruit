import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/orange.png";
require("./nav.css");


require("./nav.css");

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <a href="" className="brand-logo">
          <img className="logo-secondary" src={logo} alt="" />
        </a>
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
            <Link to={"/"}>
              <img className="icon-middle-nav-mobile" />
            </Link>
          </div>

          <div className="collapse navbar-collapse navbar-left navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              {this.props.authenticated ? (
                <li>
                  <a href="#" onClick={this.props.logout}>
                    <div
                      className="page-scroll nav-left-text"
                      data-toggle="modal"
                    >
                      <p>LOGOUT</p>
                    </div>
                  </a>
                </li>
              ) : (
                <li>
                  <Link to={"/login"}>
                    <div
                      className="page-scroll nav-left-text"
                      data-toggle="modal"
                    >
                      <p>LOGIN</p>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <a className="page-scroll nav-right-text" href="/profile">
                  <img className="navigation-icons" />
                  <p>PROFILE</p>
                </a>
              </li>
              <li className="nav-items active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              {this.props.authenticated ? (
                <li>
                  <a
                    className="page-scroll nav-right-text"
                    href="/users/sign-out"
                    data-toggle="modal"
                  >
                    <img className="navigation-icons" />
                    <p>SEARCH LOCATION</p>
                  </a>
                </li>
              ) : (
                ""
              )}
              <li>
                <a
                  className="page-scroll nav-right-text"
                  data-toggle="modal"
                  data-target="#login-modal"
                >
                  <img className="navigation-icons" />
                  <p>ITINERARY</p>
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="icon-middle-nav-desktop" />
          </Link>
        </div>
      </nav>
    );
  }
}
