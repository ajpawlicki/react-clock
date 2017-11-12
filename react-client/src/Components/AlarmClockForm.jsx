import React, {Component} from 'react';

class AlarmClockForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarmHours: NaN,
      alarmMinutes: NaN,
      alarmSeconds: NaN,
      alarmPeriod: null,
      hours: '',
      minutes: '',
      seconds: '',
      period: 'AM'
    };

    this.handleHoursChange = this.handleHoursChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleSecondsChange = this.handleSecondsChange.bind(this);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
  }

  handleHoursChange(e) {
    this.setState({
      hours: e.target.value
    });
  }

  handleMinutesChange(e) {
    this.setState({
      minutes: e.target.value
    });
  }

  handleSecondsChange(e) {
    this.setState({
      seconds: e.target.value
    });
  }

  handlePeriodChange(e) {
    this.setState({
      period: e.target.value
    });
  }

  setAlarm(e) {
    e.preventDefault();
    this.setState({
      alarmHours: this.state.hours,
      alarmMinutes: this.state.minutes,
      alarmSeconds: this.state.seconds,
      alarmPeriod: this.state.period
    });
  }

  componentWillReceiveProps(nexProps) {
    if (this.areTimesEqual(nexProps, this.state)) this.props.ringAlarm();
  }

  areTimesEqual(actualTime, alarmTime) {
    const {hours, minutes, seconds, period} = actualTime;
    const {alarmHours, alarmMinutes, alarmSeconds, alarmPeriod} = alarmTime;

    return hours === +alarmHours
      && minutes === +alarmMinutes
      && seconds === +alarmSeconds
      && period === alarmPeriod;
  }

  render() {
    return (
      <form className="alarm-clock-form" onSubmit={this.setAlarm}>
        <input type="number" placeholder="hours" onChange={this.handleHoursChange} max="12" value={this.state.hours}/>
        <input type="number" placeholder="minutes" onChange={this.handleMinutesChange} maxLength="59" value={this.state.minutes}/>
        <input type="number" placeholder="seconds" onChange={this.handleSecondsChange} maxLength="59" value={this.state.seconds}/>
        <select name="" id="" onChange={this.handlePeriodChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <input type="submit"/>
      </form>
    );
  }
}

export default AlarmClockForm;