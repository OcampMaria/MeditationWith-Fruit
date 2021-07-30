import React, { Component } from "react";
import Nav from "./children/Nav";
import audio from "./audio/meditation.mp3";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import audioImg from "./images/Audio1.png";

// require("./main.css");
require("./styles/AudioPlayer.css");

const audioSrc = audio;

class AudioPlayer extends Component {
  state = {
    src: audioSrc, // can be a prop
    playing: false,
    progress: 0,
    mute: false,
    currentTime: "0:00",
    duration: "...",
  };

  updateProgress = () => {
    const duration = this.audio.duration;
    const currentTime = this.audio.currentTime;

    const progress = (currentTime * 100) / duration;
    const playbackTime = this.formatTime(currentTime.toFixed(0));

    this.setState({
      progress: progress,
      currentTime: playbackTime,
    });
  };

  setProgress = (e) => {
    const target =
      e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
    const width = target.clientWidth;
    const rect = target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const duration = this.audio.duration;
    const currentTime = (duration * offsetX) / width;
    const progress = (currentTime * 100) / duration;

    this.audio.currentTime = currentTime;

    const playbackTime = this.formatTime(currentTime.toFixed(0));

    this.setState({
      progress: progress,
      currentTime: playbackTime,
    });

    this.play();
  };

  play = () => {
    this.setState({
      playing: true,
    });

    this.audio.play();

    // this.props.onPlay()
  };

  pause = () => {
    this.setState({
      playing: false,
    });

    this.audio.pause();

    // this.props.onPause()
  };

  toggle = () => {
    return this.state.playing ? this.pause() : this.play();
  };

  toggleMute = () => {
    const mute = this.state.mute;

    this.setState({
      mute: !mute,
    });

    this.audio.volume = !!mute;
  };

  componentDidMount() {
    const audio = this.audio;

    audio.onloadedmetadata = () => {
      this.setState({
        duration: this.formatTime(audio.duration.toFixed(0)),
      });
    };

    audio.addEventListener("timeupdate", (e) => {
      this.updateProgress();
    });
  }

  formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
      .filter((a) => a)
      .join(":");
  }

  render() {
    const { playing, progress } = this.state;
    return (
      <div className="full-height-grow">
        <Nav />
        <div className="container component-container">
          {/* <header className="main-header">
            <a href="" className="brand-logo">
              <img className="logo-secondary" src={logo} alt="" />
            </a>
            <nav className="main-nav">
              <ul>
                <li className="nav-items secondary-nav">
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li className="nav-items secondary-nav">
                  <Link to={"/"}>Log Out</Link>
                </li>
              </ul>
            </nav>
          </header> */}

          <div className="player-container">
            <div>
              <a href="" className="brand-logo">
                <img className="img-secondary" src={audioImg} alt="audioimg" />
              </a>
            </div>
            {/* audio image end*/}

         
              <div className="progress-waveform-wrap">
                <div className="time player-time">
                  <span className="current-time">{this.state.currentTime}</span>{" "}
                  <span className="duration">{this.state.duration}</span>
                </div>

                <audio
                  ref={(audio) => {
                    this.audio = audio;
                  }}
                  src={this.state.src}
                  preload="auto"
                />

                <div
                  className="player-progress-container"
                  onClick={(e) => this.setProgress(e)}
                >
                  <span
                    className="player-progress-value"
                    style={{ width: progress + "%" }}
                  />
                </div>
              </div>
           

            <div className="forms">
              <div className="player-btns">
                <button className="back">
                  <i className="glyphicon glyphicon-backward" />
                </button>
                <button
                  onClick={this.toggle}
                  className="player-btn big"
                  title="Play/Pause"
                >
                  <i
                    className={
                      playing
                        ? "glyphicon glyphicon-pause"
                        : "glyphicon glyphicon-play-circle"
                    }
                  />
                </button>
                <button className="back">
                  <i className="glyphicon glyphicon-forward" />
                </button>
              </div>

              <div className="forms">
                <form

                // onSubmit={this.handleSubmit}
                >
                  <div id="location-form" ref="locationform">
                    <input
                      id="location-input"
                      className="form"
                      ref="user"
                      type="text"
                      name="location"
                      placeholder="Please Enter Location:"

                      // onChange={this.handleUsernameChange}
                      // value={this.state.username}
                    />
                  </div>
                </form>
                <div>
                  <Link to="/profile">
                    <button
                      type="submit"
                      name="login"
                      className="btn btn-location"
                      value="Login"
                    >
                      NEXT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default AudioPlayer;


//rendor AudioPlayer in seperate component and link it to Audio page in Navbar
