import React, { Component } from "react";
import Nav from "./children/Nav";
import audio from "./audio/meditation.mp3";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
import Footer from "./children/Footer";
import audioImg from "./images/Audio1.png";
import axios from "axios";

// require("./main.css");
import "./styles/AudioPlayer.css";

const audioSrc = audio;

class AudioPlayer extends Component {
  state = {
    src: audioSrc, // can be a prop
    playing: false,
    progress: 0,
    mute: false,
    currentTime: "0:00",
    duration: "...",
    location: "",
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

    // if reload or logged out, log out and rediredct to login page
    // cheeck value if logged in. if not authenticated then redirect.
    if (!props.authenticated) {
      props.history.push("/login");
    } else {
      axios
        .get(`/apis/users/${props.loggedUser._id}/audioplayer`)
        .then((response) => {
          console.log(response.data);
          props.setLoggedUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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

  formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
      .filter((a) => a)
      .join(":");
  }

  // change state location
  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleDoneClick = () => {
    if (this.state.location === "") {
      alert("Location is required");
      return;
    }

    const response = axios
      .put(`/apis/users/${this.props.loggedUser._id}/session`, {
        location: this.state.location,
        sessionFruit: this.props.loggedUser.fruit,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.props.history.push("/profile");
  };

  render() {
    const { playing, progress } = this.state;
    return (
      <div className="full-height-grow">
        <div className="container component-container">
          <div className="player-container">
            <div>
              <a href="" className="">
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
                      onChange={this.handleLocationChange}
                      value={this.state.location}
                    />
                  </div>
                </form>
                <div>
                  <button
                    onClick={this.handleDoneClick}
                    name="login"
                    className="btn btn-location"
                    value="Login"
                  >
                    Done
                  </button>
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
