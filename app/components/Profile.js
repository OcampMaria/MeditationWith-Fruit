import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import fruits from "./images/Fruits/fruits_background.png";
import apple from "./images/Fruits/apples.png";
import axios from "axios";

// require("./main.css");
require("./styles/profile.css");

export default function Profile(props) {
  useEffect(() => {
    // if reload or logged out, log out and rediredct to login page
    // cheeck value if logged in. if not authenticated then redirect.
    if (!props.authenticated) {
      props.history.push("/login");
    } else {
      axios
        .get(`/apis/users/${props.loggedUser._id}/profile`)
        .then((response) => {
          console.log(response.data);
          props.setLoggedUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className=" full-height-grow">
      <div className="">
        {/* <section className="profile-section"> */}
        <div className="max-with">
          <div className="session">
            <h3 className="title-secondary">- Welcome Back {}! -</h3>
            <h3 className="title-mobile">Welcome Back {}!</h3>

            <div>
              <p className="subtitle-profile">New Session</p>

              <Link to="/sessioninstructions" className="new-session">
                <button type="button" className="btn-session">
                  +
                </button>
              </Link>

              <div className="fruit-img">
                <a href="" className="image-line">
                  <img className="profile-images" src={fruits} alt="" />
                </a>
                <a href="" className="image-line">
                  <img
                    className="profile-images image-500"
                    src={fruits}
                    alt=""
                  />
                </a>
                <a href="" className="image-line">
                  <img
                    className="profile-images image-500 image-800"
                    src={fruits}
                    alt=""
                  />
                </a>
              </div>

        
              

              <div className="cards">
              {props.loggedUser.sessions.map(session => {
                return(
                  <div className="wrap">
                  <div className="one">
                    <div className="card">
                      <div className="box">
                        <p className="text">{session.sessionFruit}</p>
                        <div className="img ilustration">
                          <a href="" className="">
                            <img
                              className="logo-secondary"
                              src={apple}
                              alt=""
                            />
                          </a>
                        </div>
                        <p className="text">{session.location}</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}
                
               
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
}
