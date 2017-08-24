import { ipcRenderer } from 'electron';
import { IPC } from './constants';

export function registerIpcRendererEvents(store) {
  ipcRenderer.on(IPC.RESPONSE_INIT, (event, message) => {
    store.dispatch(message);
  });

  ipcRenderer.on(IPC.RESPONSE_SETTINGS_SAVE, (event, message) => {
    store.dispatch(message);
  })
}

export function requestStoreInitialization() {
  ipcRenderer.send(IPC.REQUEST_INIT);
}

export function requestSettingsSave(settings) {
  ipcRenderer.send(IPC.REQUEST_SETTINGS_SAVE, settings);
}