import React, {Component} from 'react';
import ClockList from './ClockList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = this.getTime();
    this.state.clockList = [0];
    this.state.clockId = 1;

    this.updateTime();

    this.handleAddClockClick = this.handleAddClockClick.bind(this);
    this.ringAlarm = this.ringAlarm.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
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

  handleAddClockClick() {
    this.state.clockList.push(this.state.clockId);
    
    this.setState({
      clockList: this.state.clockList,
      clockId: this.state.clockId + 1
    });
  }

  ringAlarm() {
    this.refs.alarm.play();
  }

  handleClickDelete(key) {
    for (let i = 0; i < this.state.clockList.length; i++) {
      if (key === this.state.clockList[i]) {
        this.state.clockList.splice(i, 1);

        this.setState({
          clockList: this.state.clockList
        });

        break;
      }
    }
  }

  render() {
    return (
      <div>
        <h1>What time is it?</h1>
        
        <ClockList
          clockList={this.state.clockList}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          period={this.state.period}
          ringAlarm={this.ringAlarm}
          handleClickDelete={this.handleClickDelete} />
        
        <h2 onClick={this.handleAddClockClick}>Add Clock!</h2>
        
        <audio src="http://www.soundjay.com/button/beep-05.wav" ref="alarm"></audio>
      </div>
    );
  }
}

export default App;