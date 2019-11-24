console.log("background running");

chrome.runtime.onMessage.addListened(receiver);

function receiver(request, sender, sendResponse){
    console.log(request);
}