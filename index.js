const { app, globalShortcut, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow = null;

const mainUrl = url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
});

function createMainWindow() {
  console.log(process.platform);

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 960,
    show: true
  });

  mainWindow.loadURL(mainUrl);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }


  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  })

}

function registerGlobalShortcut() {
  globalShortcut.register('F8', handleGlobalTogglePress);
  globalShortcut.register('F7', handleGlobalIncrementPress);
}

let interval = null;
let time = 0;

function handleGlobalTogglePress() {
  if (interval == null) {
    mainWindow.webContents.send('started', time);
    mainWindow.webContents.send('ping', time);
    interval = setInterval(logTimer, 1000)
  } else {
    clearInterval(interval);
    interval = null;
    time = 0;
    mainWindow.webContents.send('stopped', time);
  }
}

function handleGlobalIncrementPress() {
  if (interval != null) {
    time += 1;
  }
}

function logTimer() {
  time += 1;
  mainWindow.webContents.send('ping', time);

  if (time > 2200) {
    clearInterval(interval);
    interval = null;
    time = 0;
    mainWindow.webContents.send('stopped', time);
  }
}

app.on('ready', () => {
  createMainWindow();
  registerGlobalShortcut();
});
