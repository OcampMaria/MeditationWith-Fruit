import React, { Component } from "react";
// import Nav from "./children/Nav";
// import Footer from "./children/Footer";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import img1 from "./images/fruits.jpg";

// require("./main.css");
require("./styles/profile.css");

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

        <section className="profile-section">
          <div className="max-with">
            <div className="session">
              <h3 className="title-secondary">- Welcome Back! -</h3>

              <div>
                <p className="subtitle-profile">New Session</p>
                <Link to="/session" className="new-session">
                  <button type="button" className="  btn-session">
                    +
                  </button>
                </Link>
              </div>
            </div>

            <div className="wrap">
              <div className="one">
                <div className="card">
                  <div className="box">
                    <p className="text">kkk</p>
                    <div className="img ">
                      <a href="" className="">
                        <img className=" ilustration" src={img1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="one">
                <div className="card">
                  <div className="box">
                    <p className="text">kkk</p>
                    <div className="img ">
                      <a href="" className="">
                        <img className=" ilustration" src={img1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="one">
                <div className="card">
                  <div className="box">
                    <p className="text">kkk</p>
                    <div className="img ">
                      <a href="" className="">
                        <img className=" ilustration" src={img1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="#" className="register">
            <button type="button" className="btn btn-register">
              NEXT
            </button>
          </Link>
        </section>

        <Footer />
      </div>
    );
  }
}
