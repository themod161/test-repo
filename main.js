//https://github.com/themod161/themod-sda/releases/download/v1.1.0/themod-sda-win32-x64.zip
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    // Отслеживание закрытия окна
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // Для macOS оставляем приложение активным до явного закрытия через Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // Воссоздаем окно приложения, когда его иконка кликается и приложение активно, но окон нет
    if (mainWindow === null) {
        createWindow();
    }
});
