import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  prependZero(num) {
    return num < 10 ? '0' + num.toString() : num;
  }

  render() {
    return (
      <div className="clock">
        <span className="clock-child hours">{this.prependZero(this.props.hours)}</span>:
        <span className="clock-child minutes">{this.prependZero(this.props.minutes)}</span>:
        <span className="clock-child seconds">{this.prependZero(this.props.seconds)}</span>
        <span className="clock-child period">{this.props.period}</span>
      </div>
    )
  }
}

export default Clock;