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
  TIMER_AUTOSTART: '?autoStart',
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

const ZONE_TIMINGS = {
  PLANE_DELAY: 120,
  FIRST: {
    zone: 300,
    shrink: 300
  },
  SECOND: {
    zone: 200,
    shrink: 140
  },
  THIRD: {
    zone: 150,
    shrink: 90
  },
  FOURTH: {
    zone: 120,
    shrink: 60
  },
  FIFTH: {
    zone: 100,
    shrink: 40
  },
  SIXTH: {
    zone: 90,
    shrink: 30
  },
  SEVENTH: {
    zone: 90,
    shrink: 30
  },
  EIGHTH: { // UNCHECKED
    zone: 60,
    shrink: 15
  },
  NINTH: { // UNCHECKED
    zone: 60,
    shrink: 15
  }
};

const ZONE_TEST_TIMINGS = {
  PLANE_DELAY: 5,
  FIRST: {
    zone: 40,
    shrink: 10
  },
  SECOND: {
    zone: 40,
    shrink: 10
  },
  THIRD: {
    zone: 40,
    shrink: 10
  },
  FOURTH: {
    zone: 30,
    shrink: 5
  },
  FIFTH: {
    zone: 30,
    shrink: 5
  },
  SIXTH: {
    zone: 40,
    shrink: 10
  },
  SEVENTH: {
    zone: 40,
    shrink: 10
  },
  EIGHTH: { // UNCHECKED
    zone: 40,
    shrink: 10
  },
  NINTH: { // UNCHECKED
    zone: 40,
    shrink: 10
  }
};

const ZONE = {
  START: 'START',
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH',
  SIXTH: 'SIXTH',
  SEVENTH: 'SEVENTH',
  EIGHTH: 'EIGHTH',
  NINTH: 'NINTH',
  END: 'END',
};

const ANNOUNCE = {
  ZONE: 'ZONE',
  TEN: 10,
  THIRTY: 30,
  SHRINK: 'SHRINK',
  FIFTYPERCENT: 'FIFTYPERCENT',
};

const ZONE_DATA = {
  [ZONE.FIRST]: {
    diameter: 4550,
    dps: 0.4,
    survive: 250
  },
  [ZONE.SECOND]: {
    diameter: 2970,
    dps: 0.6,
    survive: 166
  },
  [ZONE.THIRD]: {
    diameter: 1480,
    dps: 0.8,
    survive: 125
  },
  [ZONE.FOURTH]: {
    diameter: 740,
    dps: 1,
    survive: 100
  },
  [ZONE.FIFTH]: {
    diameter: 360,
    dps: 3,
    survive: 34
  },
  [ZONE.SIXTH]: {
    diameter: 175,
    dps: 5,
    survive: 20
  },
  [ZONE.SEVENTH]: {
    diameter: 90,
    dps: 7,
    survive: 15
  },
  [ZONE.EIGHTH]: {
    diameter: 40,
    dps: 11,
    survive: 10
  },
  [ZONE.NINTH]: {
    diameter: 20,
    dps: 11,
    survive: 10
  }
};

module.exports = {
  ACTIONS,
  IPC,
  ROUTES,
  DEFAULT_SETTINGS,
  ZONE_TIMINGS,
  ZONE,
  ZONE_DATA,
  ANNOUNCE
};
