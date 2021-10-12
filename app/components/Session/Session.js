import React, { Component } from "react";
import Footer from "../children/Footer";
import InitialNav from "../children/InitialNav";

require("./main.css");
require("./styles/about.css");

// Creating the Main component
export default class Session extends Component {
  render() {
    return (
      <div className=" full-height-grow ">
        <InitialNav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />

        <Footer />
      </div>
    );
  }
}
