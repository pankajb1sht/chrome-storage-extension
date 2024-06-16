Description

This Chrome extension demonstrates how to store and retrieve data using Chrome's local storage API. Users can enter data, store it with unique keys, retrieve all stored data, and clear all data.

Features

Store data entered by the user.
Generate unique keys to avoid overwriting existing data.
Retrieve all stored data and display it on the extension popup.
Remove all stored data from Chrome local storage.
Installation

Download the extension code (HTML, CSS, and JavaScript files).
Go to chrome://extensions in your Chrome browser.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the folder containing the extension files.
Usage

Open the extension popup (usually from the Chrome extensions menu).
Enter the data you want to store in the input field.
Click the "Store Data" button.
Click the "Retrieve Data" button to display all stored data.
Click the "Remove All Data" button (use with caution) to clear all stored data.
Code Structure

index.html: The main HTML file for the extension popup, containing the user interface elements.
popup.js: The JavaScript file that handles user interactions, data storage, and retrieval.
