import React, {Component} from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = this.getTime();
    this.state.clockList = [0];
    this.state.clockId = 1;

    this.updateTime();
  }

  getTime() {
    const date = new Date();
    const hours = date.getHours();
    
    return {
      hours: this.convertToStandardHours(hours),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      period: this.getPeriod(hours)
    };
  }

  setTime(hours, minutes, seconds, period) {
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      period: period
    });
  }

  updateTime() {
    setInterval(() => {
      const {hours, minutes, seconds, period} = this.getTime();

      this.setTime(hours, minutes, seconds, period);
    }, 1000);
  }

  convertToStandardHours(hours) {
    return (hours + 11) % 12 + 1;
  }
  
  getPeriod(hours) {
    return hours === 24 || hours < 12 ? 'AM' : 'PM';
  }

  addClockClickHandler() {
    
  }

  render() {
    return (
      <div>
        <h1>What time is it?</h1>
        <Clock
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          period={this.state.period} />
        <h2 onClick={this.addClockClickHandler}>Add Clock!</h2>
      </div>
    )
  }
}

export default App;