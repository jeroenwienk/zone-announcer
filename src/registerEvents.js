import { ipcRenderer } from 'electron';
import { IPC } from './constants';

export function registerIpcRendererEvents(store) {
  ipcRenderer.on(IPC.RESPONSE_INIT, (event, message) => {
    store.dispatch(message);
  })
}

export function requestStoreInitialization() {
  ipcRenderer.send(IPC.REQUEST_INIT);
}