
function removeItems() {
removeButton = document.getElementById('remove-selected');
overlayWindow = document.getElementById('overlay');
    //revision (07.28.15): Replaced the For Loop targeting the checkboxes, thanks to Denis Gorbachev via comments (02.19.15)
Array.prototype.forEach.call(document.querySelectorAll("input[type=checkbox]"), function(node) {node.checked = "checked"})
setTimeout(function () {
    if (removeButton.getAttribute("disabled") !== null) {
        removeButton.removeAttribute("disabled")
    }
    /* revision (08.20.14): no longer binding to that condition, button should no longer be disabled, so click! */
    if ((overlayWindow.hasAttribute("hidden")) && (overlayWindow.getAttribute("hidden") !== false)) {
        removeButton.click();
    }
    /* revision (08.20.14): new Interval, to check against the overlay DIV containing the confirmation "Remove" button */
    /* Attempting to click the button while the DIV's "hidden" attribute is in effect will cause FAILED ASSERTION */
    stopButton = setInterval(function () {
        if (overlayWindow.hasAttribute("hidden")) {
            if (overlayWindow.getAttribute("hidden") == "false") {
                hidden = false
            } else {
                hidden = true
            }
        } else {
            hidden = false
        }
        if (!hidden) {
            document.getElementById("alertOverlayOk").click();
            clearInterval(stopButton)
        }
    }, 250)
}, 250)
}

//revision (08.20.14): Lets build our buttons to control this so we no longer need the console
//stop button (08.20.14)
var stopButton = document.createElement('button');
stopButton.setAttribute('id', "stopButton");
stopButton.innerHTML = "Stop";
stopButton.style.background = "#800";
stopButton.style.color = "#fff";
stopButton.style.display = "none";
stopButton.onclick = function () {
    clearInterval(window.clearAllFiltered);
    document.getElementById("stopButton").style.display = "none";
    document.getElementById("startButton").style.display = ""
};

//start button (08.20.14)
var startButton = document.createElement('button');
startButton.setAttribute('id', "startButton");
startButton.innerHTML = "Start";
startButton.style.background = "#090";
startButton.style.color = "#fff";
startButton.onclick = function () {
    window.clearAllFiltered = setInterval(function () {
        /* revision (07.28.15): Stop the Loop automatically if there are no more items to remove */
        if(document.getElementById("results-header").innerText=="No search results found."){
            document.getElementById("stopButton").click();
            }
        if (document.getElementById("loading-spinner").getAttribute("hidden") !== null) {
            removeItems()
        }
    }, 250); //adjust Time Here (1500 [millisec] = 1.5sec)
    document.getElementById("stopButton").style.display = "";
    document.getElementById("startButton").style.display = "none"
};

/* revision (08.20.14): Now we add our buttons, and we're ready to go! */
editingControls = document.getElementById('editing-controls');
editingControls.appendChild(stopButton);
editingControls.appendChild(startButton);