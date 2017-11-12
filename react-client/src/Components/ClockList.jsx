import React, {Component} from 'react';
import Clock from './Clock.jsx';

const ClockList = (props) => {
  return (
    <div className="clock-list">
      {props.clockList.map(id => {
        return <Clock
          key={id}
          id={id}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
          period={props.period}
          ringAlarm={props.ringAlarm}
          handleClickDelete={props.handleClickDelete} />
      })}
    </div>
  );
};

export default ClockList;
