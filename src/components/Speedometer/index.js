// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state

    if (speed + 10 > 200) {
      this.setState(prevState => ({speed: 200}))
    } else {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    if (speed - 10 < 0) {
      this.setState(prevState => ({speed: 0}))
    } else {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedImage"
          alt="Speedometer"
        />
        <div>
          <h1>Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <button className="btn accelerate-button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="btn break-button" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
