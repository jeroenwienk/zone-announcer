import { requestSettingsSave } from '../../registerEvents';

export const saveSettings = (settings) => (dispatch, getState) => {
  requestSettingsSave(settings);
};