const { globalShortcut, BrowserWindow } = require('electron');
const { IPC } = require('../constants');

function registerFromSettings(settings) {
  const mainWindow = BrowserWindow.getFocusedWindow();
  const parsedSettings = parseSettings(settings);
  globalShortcut.unregisterAll();
  globalShortcut.register(parsedSettings.parsedToggle, handleGlobalTogglePress.bind(this, mainWindow));
  globalShortcut.register(parsedSettings.parsedIncrement, handleGlobalIncrementPress.bind(this, mainWindow));
  globalShortcut.register(parsedSettings.parsedDecrement, handleGlobalDecrementPress.bind(this, mainWindow));
}

function parseSettings(settings) {
  const {
    toggleKey,
    toggleCtrl,
    toggleAlt,
    incrementKey,
    incrementCtrl,
    incrementAlt,
    decrementKey,
    decrementCtrl,
    decrementAlt,
  } = settings;

  const Ctrl = 'Ctrl+';
  const Alt = 'Alt+';
  const parsedToggle = `${toggleCtrl === true ? Ctrl : ''}${toggleAlt === true ? Alt : ''}${toggleKey}`;
  const parsedIncrement = `${incrementCtrl === true ? Ctrl : ''}${incrementAlt === true ? Alt : ''}${incrementKey}`;
  const parsedDecrement = `${decrementCtrl === true ? Ctrl : ''}${decrementAlt === true ? Alt : ''}${decrementKey}`;

  return {
    parsedToggle,
    parsedIncrement,
    parsedDecrement
  }
}

function handleGlobalTogglePress(window) {
  window.webContents.send(IPC.SHORTCUT_TIMER_TOGGLE);
}

function handleGlobalIncrementPress(window) {
  window.webContents.send(IPC.SHORTCUT_TIMER_INCREMENT);
}

function handleGlobalDecrementPress(window) {
  window.webContents.send(IPC.SHORTCUT_TIMER_DECREMENT);
}

module.exports = {
  registerFromSettings
};