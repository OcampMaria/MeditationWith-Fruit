// Include React
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import logo from "./images/orange.png";
import Footer from "./children/Footer";
import InitialNav from "./children/InitialNav";

require("./styles/login.css");
// require("./main.css");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  loginUser = (submitObject) => {
    axios
      .post("/apis/users/login", submitObject)
      .then(
        function (data) {
          console.log("login data", data)
          if (data.data.success) {
            this.props.authenticate();
            this.props.setLoggedUser(data.data.user);
            this.setState({
              redirectToReferrer: true,
            });
          } else {
            alert(data.data.message);
          }
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });

    this.setState({
      username: "",
      password: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput,
    };

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/profile" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className=" full-height-grow">
        {/* <InitialNav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}

        <div className="join-main-section">
          <h1 className="join-text">
            Welcome!
            <span className="accent-text"> Log Into Your Account</span>
          </h1>

          <form className="join-form" onSubmit={this.handleSubmit}>
            <h3 className="usertitle">- USER LOGIN -</h3>
            <div
              id="username-form"
              ref="usernameForm"
              className="form-group col-lg-12"
            >
              <label>Username</label>
              <input
                id="username-input"
                className="form-control"
                ref="user"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            </div>
            <div
              id="password-form"
              className="form-group col-lg-12"
              ref="passwordForm"
            >
              <label>Password</label>
              <input
                id="password-input"
                className="form-control"
                ref="password"
                type="password"
                name=""
                placeholder="Password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
            </div>

            {/* <div className="input-group col-lg-12">
              <Link to="/profile" className="register">
                <button
                  type="submit"
                  name="login"
                  className="btn"
                  value="Login"
                >
                  SUBMIT
                </button>
              </Link>
            </div> */}

            <div className="input-group col-lg-12 ">
            <Link to="/profile">
              
            </Link>
              <button type="submit" className="btn" name="login" value="Login">
                
                SUBMIT
              </button>
              <div className="redirect">
                <a href="/signup">Sign-Up</a>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
