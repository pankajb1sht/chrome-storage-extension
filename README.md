## Chrome Storage Extension

**Description**

This Chrome extension demonstrates how to store and retrieve data using Chrome's local storage API. Users can enter data, store it with unique keys, retrieve all stored data, and clear all data.

**Features**

* Store data entered by the user.
* Generate unique keys to avoid overwriting existing data.
* Retrieve all stored data and display it on the extension popup.
* Remove all stored data from Chrome local storage.

**Installation**

1. Download the extension code (HTML, CSS, and JavaScript files).
2. Go to `chrome://extensions` in your Chrome browser.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

**Usage**

1. Open the extension popup (usually from the Chrome extensions menu).
2. Enter the data you want to store in the input field.
3. Click the "Store Data" button.
4. Click the "Retrieve Data" button to display all stored data.
5. Click the "Remove All Data" button (**use with caution**) to clear all stored data.

**Code Structure**

* `index.html`: The main HTML file for the extension popup, containing the user interface elements.
* `popup.js`: The JavaScript file that handles user interactions, data storage, and retrieval.
