import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { ipcRenderer } from 'electron';
import { connect } from 'react-redux';

import { IPC, ROUTES, ZONE, ANNOUNCE } from '../constants';
import { checkTime } from '../helpers/checkTime';
import { playAudio } from '../helpers/playAudio';

import ZoneInfo from '../components/ZoneInfo';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  cardRoot: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class Timer extends Component {
  state = {
    time: 0,
    currentInfo: null
  };

  constructor() {
    super();
    ipcRenderer.on(IPC.SHORTCUT_TIMER_TOGGLE, this.handleTimerToggle);
    ipcRenderer.on(IPC.SHORTCUT_TIMER_INCREMENT, this.handleTimerIncrement);
    ipcRenderer.on(IPC.SHORTCUT_TIMER_DECREMENT, this.handleTimerDecrement);
  }

  componentDidMount() {
    if (this.props.location.search === ROUTES.TIMER_AUTOSTART) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    ipcRenderer.removeListener(IPC.SHORTCUT_TIMER_TOGGLE, this.handleTimerToggle);
    ipcRenderer.removeListener(IPC.SHORTCUT_TIMER_INCREMENT, this.handleTimerIncrement);
    ipcRenderer.removeListener(IPC.SHORTCUT_TIMER_DECREMENT, this.handleTimerDecrement);
  }

  handleTimerToggle = () => {
    if (this.interval == null) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  };

  handleTimerIncrement = () => {
    if (this.interval != null) {
      this.setState({
        time: this.state.time + 1
      })
    }
  };

  handleTimerDecrement = () => {
    if (this.interval != null) {
      this.setState({
        time: this.state.time + -1
      })
    }
  };

  startTimer = () => {
    if (this.interval == null) {
      const currentInfo = checkTime(this.state.time, this.props.settings.startFrom);

      if (currentInfo != null) {
        this.setState({
          currentInfo
        });
      }

      this.interval = setInterval(this.updateTimer, 1000)
    }
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      time: 0,
      currentInfo: null
    });
    playAudio({ zone: ZONE.END, announce: ANNOUNCE.ZONE })
  };

  updateTimer = () => {
    const currentInfo = checkTime(this.state.time + 1, this.props.settings.startFrom);

    this.setState({
      currentInfo: currentInfo != null ? currentInfo : this.state.currentInfo,
      time: this.state.time + 1
    });
  };

  static formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  render() {
    return (
      <div>

        <Paper className={this.props.classes.cardRoot}>

          <Typography type="title">
            Timer
          </Typography>

          <Typography type="body1">
            {Timer.formatTime(this.state.time)}
          </Typography>

        </Paper>

        <Paper className={this.props.classes.cardRoot}>

          <ZoneInfo currentInfo={this.state.currentInfo}/>

        </Paper>

      </div>
    )
  }

}

function mapStateToProps({ settings }) {
  return {
    settings
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Timer));
