const remote = require('electron').remote;

document.addEventListener("load", function (event) {
    // Exit click event
    document.getElementById("titleExit").addEventListener("click", function (event) {
        var window = remote.getCurrentWindow();
        window.close();
    })

    // Minimize click event
    document.getElementById("titleMinimize").addEventListener("click", function (event) {
        var window = remote.getCurrentWindow();

        if (window.isMaximized) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    })

    // Maximize click event
    document.getElementById("titleMaximize").addEventListener("click", function (event) {
        var window = remote.getCurrentWindow();
        window.minimize();
    })
})