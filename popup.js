document.addEventListener('DOMContentLoaded', function() {
// Function to store user input in Chrome storage
function storeData() {
  const inputData = document.getElementById('inputData');

  if (!inputData) {
    console.log('Input data element not found');
    return; // Handle missing input 
  }

  const inputElement = inputData.value.trim();

  if (!inputElement) {
    console.log('Input data is empty');
    return; // Exit if input is empty
  }

  // Generate a unique key to avoid overwriting
  const key = generateUniqueKey(); 

  chrome.storage.local.set({ [key]: inputElement }, function () {
    console.log(`Data stored in Chrome storage with key: ${key}`);
  });
}

function retrieveData() {
  chrome.storage.local.get(null, function (result) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }

    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = ''; // Clear previous content

    if (Object.keys(result).length > 0) {
      // iterate over all stored keys and values
      for (const key in result) {
        const dataDiv = document.createElement('div');
        dataDiv.textContent = `Stored Data: Key: ${key}, Value: ${result[key]}`;
        dataDisplay.appendChild(dataDiv);
      }
    } else {
      dataDisplay.textContent = 'No data stored';
    }
  });
}

function removeAllData() {
  chrome.storage.local.clear(function () {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }

    console.log('All data removed from Chrome storage');
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.textContent = 'No data stored'; // Update display
  });
}

function generateUniqueKey() {
  return Date.now().toString();
}

document.getElementById('storeButton').addEventListener('click', storeData);
document.getElementById('retrieveButton').addEventListener('click', retrieveData);
document.getElementById('removeAllButton').addEventListener('click', removeAllData);


// Initial call to retrieve and display data when popup is opened
retrieveData();
});
