import React, { Component } from "react";

require("./footer.css");

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <ul className="wrap">
            <li className="list">
              <a className="item">DiSH Lab</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="wrap">
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Facebook 👋</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}