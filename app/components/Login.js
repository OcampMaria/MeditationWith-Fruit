// Include React
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import logo from "./images/orange.png";
import Footer from "./children/Footer";
// import Nav from "./children/Nav";

require("./styles/login.css");
require("./main.css");

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
          console.log(data.data);
          if (data.data.success) {
            this.props.authenticate();
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
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container full-height-grow">
        {/* <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}
        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo-secondary" src={logo} alt="" />
          </a>
          <nav className="main-nav">
            <ul>
              <li className="nav-items secondary-nav">
                <Link to={"/"}>Homepage</Link>
              </li>
              <li className="nav-items secondary-nav">
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="join-main-section">
          <h1 className="join-text">Log In to Your Account</h1>
          <br />
          <form className="join-forms" onSubmit={this.handleSubmit}>
          <h3 className="usertitle">- USER LOGIN -</h3>
            <div className="input-group">
              <input
                id="username-input"
                ref="user"
                type="text"
                name="user"
                placeholder="Username"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            </div>
            <div className="input-group">
             
              <input
                id="password-input"
                ref="password"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
            </div>
           
            <div className="input-group">
              <button type="submit" name="login" className="btn login" value="Login">
                <Link to="/profile"></Link>
                Login
              </button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
