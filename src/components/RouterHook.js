import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import { withRouter } from 'react-router-dom';

import { IPC, ROUTES } from '../constants';

class RouterHook extends Component {

  constructor() {
    super();
    ipcRenderer.on(IPC.SHORTCUT_TIMER_TOGGLE, this.handleTimerToggle);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(IPC.SHORTCUT_TIMER_TOGGLE, this.handleTimerToggle);
  }

  handleTimerToggle = () => {
    const { location, history } = this.props;

    if (!location.pathname.includes(ROUTES.TIMER)) {
      history.push(`${ROUTES.TIMER}${ROUTES.TIMER_AUTOSTART}`);
    }

  };

  render() {
    return null;
  }
}

export default withRouter(RouterHook)