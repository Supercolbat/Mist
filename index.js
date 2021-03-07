const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
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
