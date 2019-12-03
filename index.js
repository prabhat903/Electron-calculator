const {app,BrowserWindow} =  require('electron');
let win ;
function createWindow (argument) {
	win = new BrowserWindow({
		width:360,
		height:430,
		webPreferences:{
			nodeIntegration :true
		}
	})
	win.loadFile('index.html');
	// win.webContents.openDevTools();
	win.on('close',()=>{
		win = null;
	})
}
app.on('ready',createWindow);
