import React, {Component} from 'react';
import AlarmClockForm from './AlarmClockForm.jsx';

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  prependZero(num) {
    return num < 10 ? '0' + num.toString() : num;
  }

  render() {
    return (
      <div className="clock-container">
        <div className="clock-container-top">
          <div className="clock">
            <span className="clock-child hours">{this.prependZero(this.props.hours)}</span>:
            <span className="clock-child minutes">{this.prependZero(this.props.minutes)}</span>:
            <span className="clock-child seconds">{this.prependZero(this.props.seconds)}</span>
            <span className="clock-child period">{this.props.period}</span>
          </div>
          <div onClick={() => this.props.handleClickDelete(this.props.id)}>Delete</div>
        </div>

        <AlarmClockForm
          hours={this.props.hours}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          period={this.props.period}
          ringAlarm={this.props.ringAlarm} />
      </div>
    );
  }
}

export default Clock;