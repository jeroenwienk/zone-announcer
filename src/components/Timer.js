import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { ipcRenderer } from 'electron';

import { IPC } from '../constants';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class Timer extends Component {
  state = {
    time: 0
  };

  constructor() {
    super();
    ipcRenderer.on(IPC.SHORTCUT_TIMER_TOGGLE, this.handleTimerToggle);
    ipcRenderer.on(IPC.SHORTCUT_TIMER_INCREMENT, this.handleTimerIncrement);
    ipcRenderer.on(IPC.SHORTCUT_TIMER_DECREMENT, this.handleTimerDecrement);
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
      this.interval = setInterval(this.updateTimer, 1000)
    }
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      time: 0
    })
  };

  updateTimer = () => {
    this.setState({
      time: this.state.time + 1
    })
  };

  formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  render() {
    return (
      <Paper className={this.props.classes.root}>

        <Typography type="title">
          Timer
        </Typography>

        <Typography type="body1">
          {this.formatTime(this.state.time)}
        </Typography>

      </Paper>
    )
  }
}

export default withStyles(styles)(Timer);