import React, { Component } from "react";

require("./footer.css");

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <ul className="wrap">
            <li className="list">
              <a href="https://www.dishlab.org/" target="_blank" className="item">DiSH Lab</a>
            </li>
            <li>
              <a href="https://www.dishlab.org/first.php" target="_blank">About Us</a>
            </li>
            <li>
              <a href="https://www.dishlab.org/contact.php" target="_blank">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="wrap">
            <li>
              <a href="https://twitter.com/DiSH_Lab" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/dishlab" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="">Feedback 👋</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}