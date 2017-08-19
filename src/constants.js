const ACTIONS = {
  INIT: 'INIT',
  SETTINGS_SAVE: 'SETTINGS_SAVE'
};

const IPC = {
  REQUEST_INIT: 'REQUEST_INIT',
  RESPONSE_INIT: 'RESPONSE_INIT',
  SHORTCUT_TIMER_TOGGLE: 'SHORTCUT_TIMER_TOGGLE',
  SHORTCUT_TIMER_INCREMENT: 'SHORTCUT_TIMER_INCREMENT',
  SHORTCUT_TIMER_DECREMENT: 'SHORTCUT_TIMER_DECREMENT'
};

const ROUTES = {
  HOME: '/',
  TIMER: '/timer',
  SETTINGS: '/settings'
};

module.exports = {
  ACTIONS,
  IPC,
  ROUTES
};