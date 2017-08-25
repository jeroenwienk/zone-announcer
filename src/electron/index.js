const path = require('path');
const url = require('url');
const { app, BrowserWindow, ipcMain } = require('electron');
const storage = require('electron-json-storage');
const isEmpty = require('lodash/isEmpty');

const globalShortcuts = require('./globalShortcuts');
const constants = require('../constants');
const { ACTIONS, IPC, DEFAULT_SETTINGS } = constants;

let mainWindow = null;
let mainUrl = null;

if (process.env.NODE_ENV === 'development') {
  mainUrl = url.format({
    pathname: 'localhost:8080/index.html',
    protocol: 'http:',
    slashes: true
  });
} else {
  mainUrl = url.format({
    pathname: path.resolve(__dirname, '../../dist/index.html'),
    protocol: 'file:',
    slashes: true
  });
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    icon: path.join(__dirname, '../../assets/icons/32x32.png')
  });
  mainWindow.loadURL(mainUrl);

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });

}

app.on('ready', () => {
  createMainWindow();
  console.log(app.getPath('userData'));
});

ipcMain.on(IPC.REQUEST_INIT, () => {
  storage.get('settings', (error, settings) => {
    if (error) throw error;

    if (isEmpty(settings)) {
      storage.set('settings', DEFAULT_SETTINGS, function (error) {
        if (error) throw error;
      });
      settings = DEFAULT_SETTINGS
    }

    mainWindow.webContents.send(IPC.RESPONSE_INIT, {
      type: ACTIONS.INIT,
      payload: settings
    });

    globalShortcuts.registerFromSettings(settings);
  });
});

ipcMain.on(IPC.REQUEST_SETTINGS_SAVE, (event, settings) => {
  storage.set('settings', settings, function (error) {
    if (error) throw error;

    globalShortcuts.registerFromSettings(settings);
    mainWindow.webContents.send(IPC.RESPONSE_SETTINGS_SAVE, {
      type: ACTIONS.SETTINGS_SAVE,
      payload: settings
    });

  });
});


