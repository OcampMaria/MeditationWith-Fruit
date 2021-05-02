import React, { Component } from 'react';
import Nav from './children/Nav';
import audio from'./audio/meditation.mp3';

require("./main.css");
require("./styles/AudioPlayer.css")

const audioSrc = audio


class AudioPlayer extends Component {
    state = {
        src: audioSrc, // can be a prop
        playing: false,
        progress: 0,
        mute: false,
        currentTime: '0:00',
        duration: '...'
    }

    updateProgress = () => {
        const duration = this.audio.duration
        const currentTime = this.audio.currentTime

        const progress = (currentTime * 100) / duration
        const playbackTime = this.formatTime(currentTime.toFixed(0))

        this.setState({
            progress: progress,
            currentTime: playbackTime
        })
    }

    setProgress = e => {
        const target =
            e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target
        const width = target.clientWidth
        const rect = target.getBoundingClientRect()
        const offsetX = e.clientX - rect.left
        const duration = this.audio.duration
        const currentTime = (duration * offsetX) / width
        const progress = (currentTime * 100) / duration

        this.audio.currentTime = currentTime

        const playbackTime = this.formatTime(currentTime.toFixed(0))

        this.setState({
            progress: progress,
            currentTime: playbackTime
        })

        this.play()
    }

    play = () => {
        this.setState({
            playing: true
        })

        this.audio.play()

        // this.props.onPlay()
    }

    pause = () => {
        this.setState({
            playing: false
        })

        this.audio.pause()

        // this.props.onPause()
    }

    toggle = () => {
        return this.state.playing ? this.pause() : this.play()
    }

    toggleMute = () => {
        const mute = this.state.mute

        this.setState({
            mute: !mute
        })

        this.audio.volume = !!mute
    }

    componentDidMount() {
        const audio = this.audio

        audio.onloadedmetadata = () => {
            this.setState({
                duration: this.formatTime(audio.duration.toFixed(0))
            })
        }

        audio.addEventListener('timeupdate', e => {
            this.updateProgress()
        })
    }

    formatTime(seconds) {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
            .filter(a => a)
            .join(':')
    }

    render() {
        const { playing, progress, mute } = this.state
        return (
            <div>
                 <Nav
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />

<div className="player-container">
                 
                 <div className="player-options">
                     <button
                         onClick={this.toggle}
                         className="player-btn big"
                         title="Play/Pause"
                     >
                         <i className={playing ? 'fa fa-pause' : 'fa fa-play'} />
                     </button>
                     <div className="progress-waveform-wrap">
                         <audio
                             ref={audio => {
                                 this.audio = audio
                             }}
                             src={this.state.src}
                             preload="auto"
                         />
                         <div
                             className="player-progress-container"
                             onClick={e => this.setProgress(e)}
                         >
                             <span
                                 className="player-progress-value"
                                 style={{ width: progress + '%' }}
                             />
                         </div>
                     </div>
                     <div className="player-buttons player-controls">
                         <div className="player-time">
                             <span className="current-time">
                                 {this.state.currentTime}
                             </span>{' '}
                             /{' '}
                             <span className="duration">
                                 {this.state.duration}
                             </span>
                         </div>
                         <div className="player-buttons">
                             <button
                                 className="player-btn player-btn-mute"
                                 title="Mute/Unmute"
                                 onClick={this.toggleMute}
                             >
                                 <i
                                     className={
                                         mute
                                             ? 'fa fa-volume-off'
                                             : 'fa fa-volume-up'
                                     }
                                 />
                             </button>
                         </div>
                     </div>
                 </div>
             </div>

            </div>
            
        )
    }
}

export default AudioPlayer

//rendor AudioPlayer in seperate component and link it to Audio page in Navbar

