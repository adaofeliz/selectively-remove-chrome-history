Selectively remove Chrome history
========================
Selectively remove Chrome browsing history through the Console Debugger.
Original source: http://stackoverflow.com/a/24616492/4875549


--------------
The removeItems function will select loop through all form inputs and check all checkboxes, enable the "Remove Selected Items" button and click it. After a half-second, it'll check if the "Are You Sure" prompt is displayed and, if so, click the "Yes/Remove" button automatically for you so that it will load a new list of items to do this process all over again.

The item is looped using the variable "clearAllFiltered", which is a setInterval loop, which is checking for the status of the "Loading" screen..

To start erasing your filtered history items, you can now click the green Start button.

To stop the loop manually, you can now click the red Stop button. Simple as that!

--------------

How to use it
--------------
* Open Chrome History
```sh
chrome://history-frame/
```

* Load your Console Debugger
```sh
Windows: Ctrl+Shift+J
```
```sh
OSX: Cmd+Alt+J
```

* Copy & Paste script.js content to Console
```sh
Press F12 and select the "Console" tab
```

Try it
--------------
![Image Try It](https://raw.githubusercontent.com/adaofeliz/selectively-remove-chrome-history/master/images/ksivsy9x.png)

License
--------------
MIT
