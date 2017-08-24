const ACTIONS = {
  INIT: 'INIT',
  SETTINGS_SAVE: 'SETTINGS_SAVE'
};

const IPC = {
  REQUEST_INIT: 'REQUEST_INIT',
  RESPONSE_INIT: 'RESPONSE_INIT',
  REQUEST_SETTINGS_SAVE: 'REQUEST_SETTINGS_SAVE',
  RESPONSE_SETTINGS_SAVE: 'RESPONSE_SETTINGS_SAVE',
  SHORTCUT_TIMER_TOGGLE: 'SHORTCUT_TIMER_TOGGLE',
  SHORTCUT_TIMER_INCREMENT: 'SHORTCUT_TIMER_INCREMENT',
  SHORTCUT_TIMER_DECREMENT: 'SHORTCUT_TIMER_DECREMENT'
};

const ROUTES = {
  HOME: '/',
  TIMER: '/timer',
  SETTINGS: '/settings'
};

const DEFAULT_SETTINGS = {
  startFrom: 'plane',
  toggleKey: 'F8',
  toggleCtrl: false,
  toggleAlt: false,
  incrementKey: 'F7',
  incrementCtrl: false,
  incrementAlt: false,
  decrementKey: 'F6',
  decrementCtrl: false,
  decrementAlt: false,
};

module.exports = {
  ACTIONS,
  IPC,
  ROUTES,
  DEFAULT_SETTINGS
};
