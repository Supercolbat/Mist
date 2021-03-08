const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 75,

        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(app.getAppPath(), "windowController.js")
        },

        transparent: true,
        frame: false
    })

    win.loadFile("pages/login/index.html")
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    app.quit()
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
