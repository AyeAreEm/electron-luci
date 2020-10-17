const { app, BrowserWindow, shell } = require('electron');
const { url } = require('inspector');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 180,
    transparent: true,
    frame: false
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  const handleRedirect = (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  }

  mainWindow.webContents.on('will-navigate', handleRedirect);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
