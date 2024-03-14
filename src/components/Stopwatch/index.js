// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    seconds: 0,
    minutes: 0,
  }

  onStartTimeRun = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {isTimeRunning, seconds, minutes} = this.state
    if (seconds === 59) {
      this.setState(previousState => ({
        isTimeRunning: !previousState.isTimeRunning,
        seconds: 0,
        minutes: previousState.minutes + 1,
      }))
    } else {
      this.setState(previousState => ({
        isTimeRunning: !previousState.isTimeRunning,
        seconds: previousState.seconds + 1,
      }))
    }
  }

  onStopTimeRun = () => {
    const {isTimeRunning} = this.state
    clearInterval(this.timerID)
    this.setState(previousState => ({
      isTimeRunning: !previousState.isTimeRunning,
    }))
  }

  onResetTime = () => {
    const {isTimeRunning, seconds, minutes} = this.state
    clearInterval(this.timerID)
    if (isTimeRunning === false) {
      this.setState(previousState => ({
        seconds: 0,
        minutes: 0,
      }))
    } else {
      this.setState(previousState => ({
        isTimeRunning: !previousState.isTimeRunning,
        seconds: 0,
        minutes: 0,
      }))
    }
  }

  render() {
    const {isTimeRunning, seconds, minutes} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes.toString() : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds.toString() : `0${seconds}`
    return (
      <div className="bg-container">
        <div className="watch-container">
          <h1 className="header">Stopwatch</h1>
          <div className="timer-container">
            <div className="img-text-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h2 className="timer-in-digits">
              {stringifiedMinutes}:{stringifiedSeconds}
            </h2>
            <div className="buttons-container">
              <button
                className="buttons start"
                type="button"
                onClick={this.onStartTimeRun}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="buttons stop"
                type="button"
                onClick={this.onStopTimeRun}
              >
                Stop
              </button>
              <button
                className="buttons reset"
                type="button"
                onClick={this.onResetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
