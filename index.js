const { app, globalShortcut, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const constants = require('./src/constants');
const { ACTIONS, IPC } = constants;

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
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  });
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true
  });

  mainWindow.loadURL(mainUrl);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });

  mainWindow.once('ready-to-show', () => {
    handleTest()
  })

}

function registerGlobalShortcut() {
  globalShortcut.register('F8', handleGlobalTogglePress);
  globalShortcut.register('F7', handleGlobalIncrementPress);
  globalShortcut.register('F6', handleGlobalDecrementPress);
}

function handleGlobalTogglePress() {
  mainWindow.webContents.send(IPC.SHORTCUT_TIMER_TOGGLE);
}

function handleGlobalIncrementPress() {
  mainWindow.webContents.send(IPC.SHORTCUT_TIMER_INCREMENT);
}

function handleGlobalDecrementPress() {
  mainWindow.webContents.send(IPC.SHORTCUT_TIMER_DECREMENT);
}

app.on('ready', () => {
  createMainWindow();
  registerGlobalShortcut();
});

ipcMain.on(IPC.REQUEST_INIT, () => {
  mainWindow.webContents.send(IPC.RESPONSE_INIT, {
    type: ACTIONS.INIT,
    payload: {
      startFrom: 'plane',
      toggleKey: 'F7',
      toggleCtrl: true,
      toggleAlt: false,
      incrementKey: 'F8',
      incrementCtrl: true,
      incrementAlt: false,
      decrementKey: 'F11',
      decrementCtrl: false,
      decrementAlt: true,
    }
  });
});


