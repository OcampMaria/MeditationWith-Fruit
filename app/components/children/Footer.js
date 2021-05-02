import React, { Component } from "react";

require("./footer.css");

export default class Footer extends Component {
  render() {
    return (
      <div >
        <footer className="main-footer">
          <div className="Footer-container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>

            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">DiSH Lab</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>
          </div>

          <p className="footer-font">
          Copyright &copy; 6-minutes with fruit 2021
        </p>
        </footer>
        
      </div>
    );
  }
}
