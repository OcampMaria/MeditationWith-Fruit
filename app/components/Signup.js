// Include React
import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Auth from "./utils/Auth";
import InitialNav from "./children/InitialNav";
import Footer from "./children/Footer";

require("./styles/Signup.css");
require("./main.css");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      username: "",
      password: "",
      passwordRepeat: "",
      email: "",
      emailRepeat: "",
    };
  }

  handleUsernameValidation = (event) => {
    // username is passed in
    const usernameVal = this.refs.username.value,
      usernameForm = this.refs.usernameForm,
      usernameFeedback = this.refs.usernameFeedback;
    // username is updated in state
    this.setState({
      username: usernameVal,
    });

    // username is checked to see if it matches certain length. If not, the screen will indicate it as such.
    if (usernameVal.length < 6) {
      usernameForm.classList.remove("has-success");
      usernameForm.classList.add("has-error");
      usernameFeedback.textContent =
        "username must be at least 6 characters long";
    } else {
      usernameForm.classList.remove("has-error");

      usernameForm.classList.add("has-success");
      usernameFeedback.textContent = "Username valid!";
    }
  };

  handlePasswordValidation = (event) => {
    // password is passed in
    const passwordVal = this.refs.password.value;
    const passwordForm = this.refs.passwordForm;
    const passwordFeedback = this.refs.passwordFeedback;

    this.setState({
      password: passwordVal,
    });

    const passwordRegEx =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!passwordRegEx.test(passwordVal)) {
      passwordForm.classList.remove("has-success");
      passwordForm.classList.add("has-error");
      passwordFeedback.textContent =
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.";
    } else {
      passwordForm.classList.remove("has-error");

      passwordForm.classList.add("has-success");
      passwordFeedback.textContent = "Password set correctly!";
    }
  };

  handlePasswordRepeat = (event) => {
    const passwordVal = this.state.password;
    const passwordRepeat = this.refs.repeatPassword.value;
    const repeatPasswordForm = this.refs.repeatPasswordForm;
    const repeatPasswordFeedback = this.refs.repeatPasswordFeedback;

    this.setState({
      passwordRepeat: passwordRepeat,
    });

    if (passwordVal !== passwordRepeat) {
      repeatPasswordForm.classList.remove("has-success");

      repeatPasswordForm.classList.add("has-error");
      repeatPasswordFeedback.textContent = "Passwords Don't Match";
    } else {
      repeatPasswordForm.classList.remove("has-error");

      repeatPasswordForm.classList.add("has-success");
      repeatPasswordFeedback.textContent = "Passwords Match!";
    }
  };

  handleEmailValidation = (event) => {
    const emailVal = this.refs.email.value;
    const emailForm = this.refs.emailForm;
    const emailFeedback = this.refs.emailFeedback;
    const emailAdditionalFeedback = this.refs.emailAdditionalFeedback;
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      email: emailVal,
    });

    if (!emailRegEx.test(emailVal)) {
      emailForm.classList.remove("has-success");

      emailForm.classList.add("has-error");
      emailFeedback.textContent = "Invalid Email";
      emailAdditionalFeedback.textContent = "Ex: someone@example.com";
    } else {
      emailForm.classList.remove("has-error");

      emailForm.classList.add("has-success");
      emailFeedback.textContent = "Valid Email!";
      emailAdditionalFeedback.textContent = "";
    }
  };

  handleEmailRepeat = (event) => {
    const emailVal = this.refs.emailRepeat.value;
    const emailForm = this.refs.emailRepeatForm;
    const emailFeedback = this.refs.emailRepeatFeedback;
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      emailRepeat: emailVal,
    });

    if (!emailRegEx.test(emailVal)) {
      emailForm.classList.remove("has-success");

      emailForm.classList.add("has-error");
      emailFeedback.textContent = "Emails Don't Match";
    } else {
      emailForm.classList.remove("has-error");

      emailForm.classList.add("has-success");
      emailFeedback.textContent = "Emails Match!";
    }
  };

  signUpUser = (userData) => {
    axios
      .post("/apis/users/signup", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      })
      .then(
        function (data) {
          if (data.duplicateUser) {
            // Replace with Modal
            alert("Sorry, that username has been taken");
          } else if (data.data.success) {
            this.props.authenticate();
            this.setState({
              redirectToReferrer: true,
            });
          }
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    let userData = {
      username: username,
      email: email,
      password: password,
    };

    if (!userData.username || !userData.email || !userData.password) {
      return alert("Please don't leave fields blank");
    }

    // If we have an email and password, run the signUpUser function
    this.signUpUser(userData);

    this.setState({
      value: "",
      username: "",
      password: "",
      passwordRepeat: "",
      email: "",
      emailRepeat: "",
      redirectToReferrer: false,
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/login" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        {/* <InitialNav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}
        <div className="full-height-grow ">
          <section className="join-main-section register">
            <h1 className="join-text">
              Join For 6 Minutes of
              <span className="accent-text"> Relaxation.</span>
            </h1>

            <form className="join-form" onSubmit={this.handleSubmit.bind(this)}>
              <h3 className="registration-title"> - REGISTRATION -</h3>

              <div
                id="username-form"
                ref="usernameForm"
                className="form-group col-lg-12"
              >
                <label>Username</label>
                <input
                  type=""
                  name=""
                  ref="username"
                  className="form-control"
                  id="username-input"
                  value={this.state.username}
                  onChange={this.handleUsernameValidation}
                />
                <small id="username-feedback" ref="usernameFeedback"></small>
              </div>

              <div
                id="password-form"
                className="form-group col-lg-12"
                ref="passwordForm"
              >
                <label>Password</label>
                <input
                  type="password"
                  name=""
                  ref="password"
                  className="form-control"
                  id="password-input"
                  value={this.state.password}
                  onChange={this.handlePasswordValidation}
                />
                <small
                  id="password-feedback"
                  ref="passwordFeedback"
                  className=""
                ></small>
              </div>

              <div
                id="repeat-password-form"
                className="form-group col-lg-12"
                ref="repeatPasswordForm"
              >
                <label>Repeat Password</label>
                <input
                  type="password"
                  name=""
                  ref="repeatPassword"
                  className="form-control"
                  id="repeat-password-input"
                  value={this.state.passwordRepeat}
                  onChange={this.handlePasswordRepeat}
                />
                <small
                  id="repeat-password-feedback"
                  className=""
                  ref="repeatPasswordFeedback"
                ></small>
              </div>

              <div
                id="email-form"
                className="form-group col-lg-12"
                ref="emailForm"
              >
                <label>Email Address</label>
                <input
                  type="email"
                  name=""
                  ref="email"
                  className="form-control"
                  id="email-input"
                  value={this.state.email}
                  onChange={this.handleEmailValidation}
                />

                <p id="email-feedback" className="" ref="emailFeedback"></p>
                <small
                  id="email-additional-feedback"
                  ref="emailAdditionalFeedback"
                  className="form-text text-muted"
                ></small>
              </div>

              <div
                id="email-repeat-form"
                className="form-group col-lg-12"
                ref="emailRepeatForm"
              >
                <label>Repeat Email Address</label>
                <input
                  type="email"
                  name=""
                  ref="emailRepeat"
                  className="form-control"
                  id="repeat-email-input"
                  value={this.state.emailRepeat}
                  onChange={this.handleEmailRepeat}
                />
                <small
                  id="email-repeat-feedback"
                  className=""
                  ref="emailRepeatFeedback"
                ></small>
              </div>

              <div className="input-group col-lg-12 ">
                <button type="submit" className="btn ">
                  <Link to="/login"></Link>
                  Join Now
                </button>
              </div>
              <div className="redirect">
                <a href="/login">Log-In</a>
              </div>
            </form>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
