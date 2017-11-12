import React, {Component} from 'react';
import Clock from './Clock.jsx';

class ClockList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clock-list">
        {this.props.clockList.map(id => {
          return <Clock
            key={id}
            id={id}
            hours={this.props.hours}
            minutes={this.props.minutes}
            seconds={this.props.seconds}
            period={this.props.period}
            ringAlarm={this.props.ringAlarm}
            handleClickDelete={this.props.handleClickDelete} />
        })}
      </div>
    );
  }
}

export default ClockList;