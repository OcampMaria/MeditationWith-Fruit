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
            
            <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li className="nav-items active">
                      <a className="page-scroll nav-left-text" href="/"><p>HOME</p></a>
                  </li>
                  
                  {this.props.authenticated ? (
                    <li>
                      
                      <a href="/" onClick={this.props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </li>
                  ) : (
                    <li className="nav-items active">
                      <Link to={"/login"} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                    </li>
                  )}
              </ul>
          </div>
        </nav>
      </nav>
    );
  }
}
