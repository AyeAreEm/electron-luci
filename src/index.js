const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

ipcMain.on('open-file', (e, input) => {
  if (!input.includes(':')) {
    input = `C:\\Users\\Adrian\\Desktop\\${input}`;
  }

  shell.openPath(input);
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 180,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
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
