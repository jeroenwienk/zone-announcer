import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { ROUTES } from '../constants';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import SettingsIcon from 'material-ui-icons/Settings';
import AlarmIcon from 'material-ui-icons/Alarm';

class Navigation extends Component {
  handleHomeClick = () => {
    this.props.history.push(ROUTES.HOME);
  };

  handleTimerClick = () => {
    this.props.history.push(ROUTES.TIMER);
  };

  handleSettingsClick = () => {
    this.props.history.push(ROUTES.SETTINGS);
  };

  getColor = (route) => {
    return this.props.location.pathname === route ? 'accent' : 'default';
  };

  render() {
    return (
      <Paper
        className={this.props.className}
        square
      >

        <IconButton onClick={this.handleHomeClick} color={this.getColor(ROUTES.HOME)}>
          <HomeIcon  />
        </IconButton>

        <IconButton onClick={this.handleTimerClick} color={this.getColor(ROUTES.TIMER)}>
          <AlarmIcon />
        </IconButton>

        <IconButton onClick={this.handleSettingsClick} color={this.getColor(ROUTES.SETTINGS)}>
          <SettingsIcon />
        </IconButton>

      </Paper>
    )
  }
}

export default withRouter(Navigation);