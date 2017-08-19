import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import SettingsIcon from 'material-ui-icons/Settings';
import AlarmIcon from 'material-ui-icons/Alarm';

class Navigation extends Component {
  handleHomeClick = () => {
    this.props.history.push('');
  };

  handleTimerClick = () => {
    this.props.history.push('timer');
  };

  handleSettingsClick = () => {
    this.props.history.push('settings');
  };

  render() {
    console.log(this.props);

    return (
      <Paper
        className={this.props.className}
        square
      >

        <IconButton onClick={this.handleHomeClick} color="contrast">
          <HomeIcon  />
        </IconButton>

        <IconButton onClick={this.handleTimerClick} color="contrast">
          <AlarmIcon />
        </IconButton>

        <IconButton onClick={this.handleSettingsClick} color="contrast">
          <SettingsIcon />
        </IconButton>

      </Paper>
    )
  }
}

export default withRouter(Navigation);