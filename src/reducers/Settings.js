const defaultState = {
  startFrom: 'plane',
  toggleKey: '',
  toggleCtrl: false,
  toggleAlt: false,
  incrementKey: '',
  incrementCtrl: false,
  incrementAlt: false,
  decrementKey: '',
  decrementCtrl: false,
  decrementAlt: false,
};

import { ACTIONS } from '../constants';

const settings = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SETTINGS_SAVE:
      return {
        ...state,
        ...action.payload
      };
    case ACTIONS.INIT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default settings;