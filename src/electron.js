const { app, BrowserWindow } = require('electron')
function createWindow () {
	win = new BrowserWindow({
		width: 1920,
		height: 1080,
		useContentSize: true,
		webPreferences: {
			nodeIntegration: true
		}
	});
	//win.setMenu(null);
	win.webContents.openDevTools()
	win.loadFile('src/index.html')
	win.on('closed', () => {
		win = null
	})
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})