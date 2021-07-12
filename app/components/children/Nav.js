import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/orange.png";

require("./nav.css");

export default function Nav() {
  
    return (
      <header className="main-header">
      <a href="" className="brand-logo">
        <img className="logo-secondary" src={logo} alt="" />
      </a>
      <nav className="main-nav">
        <ul>
        <li className="nav-items secondary-nav">
            <Link to={"/instructions"}>Instructions</Link>
          </li>
          <li className="nav-items secondary-nav">
            <Link to={"/quiz"}>Retake Quiz</Link>
          </li>
          <li className="nav-items secondary-nav">
            <Link to={"/"}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </header>
    );
  
}
