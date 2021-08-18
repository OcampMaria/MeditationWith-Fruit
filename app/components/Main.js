import React, { useEffect, useState } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import InitialNav from "./children/InitialNav";

require("./main.css");

// Creating the Main component
export default function Main({ props }) {
  const [authenticate, setauthenticate] = useState(props);
  const [deAuthenticate, setdeAuthenticate] = useState(props);
  const [authenticated, setauthenticated] = useState(props);
  const [logout, setlogout] = useState(props);



  return (
    <div className=" full-height-grow">
      <Helmet>
        <style>{"body { background-color: rgba(131, 166, 186, 1); }"}</style>
      </Helmet>

      <InitialNav
        authenticate={authenticate}
        deAuthenticate={deAuthenticate}
        authenticated={authenticated}
        logout={logout}
      />

      <section className="home-main-section">
        <div className="call-to-action">
          <h1 className="title">Meditation With Fruit</h1>
          <span className="subtitle">
            Use Psychology to Hack Your Stress Eating
          </span>

          <Link to="/instructions">
            <button type="button" className="btn">
              START
            </button>
          </Link>

          <h2>UNDER DEVELOPMENT...</h2>
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
