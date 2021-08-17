import React, { Component } from "react";

require("./footer.css");

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <ul className="wrap">
            <li className="list">
              <a href="https://www.dishlab.org/" className="item">DiSH Lab</a>
            </li>
            <li>
              <a href="https://www.dishlab.org/first.php">About Us</a>
            </li>
            <li>
              <a href="https://www.dishlab.org/contact.php">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="wrap">
            <li>
              <a href="https://twitter.com/DiSH_Lab">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/dishlab">Facebook</a>
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