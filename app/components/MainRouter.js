import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import AudioPlayer from "./AudioPlayer";
import About from "./About";
import Quiz from "./Questionnaire/Quiz";
import Instructions from "./Instructions/Instructions";
import Profile from "./Profile";
import SessionInstructions from "./Session/sessionInstructions";

export default function MainRouter() {
  const [authenticated, setAuthenticated] = useState(false);
  //data, to update the data

  const authenticate = () => {
    setAuthenticated(true);
  };

  const deAuthenticate = () => {
    setAuthenticated(false);
  };

  const logout = () => {
    axios
      .get("/apis/users/logout")
      .then(function (data) {
        deAuthenticate();
        window.location.reload();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Main
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={(props) => (
            <About
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/quiz"
          render={(props) => (
            <Quiz
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/instructions"
          render={(props) => (
            <Instructions
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/sessioninstructions"
          render={(props) => (
            <SessionInstructions
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />

        <Route
          exact
          path="/audioplayer"
          render={(props) => (
            <AudioPlayer
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/quiz"
          render={(props) => (
            <Quiz
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
