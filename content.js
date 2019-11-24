console.log("Chrome extension activated");

// Listen for users highlighting a title of a movie on the page
window.addEventListener('mouseup', titleSelect);

function titleSelect(){
    let addOn = " movie";
    let selectedTitle = window.getSelection().toString() + addOn;
    console.log(selectedTitle);
    if( selectedTitle.length > addOn.length ){
        let message = {
            title: selectedTitle
        };
        chrome.runtime.sendMessage(message);
    }
} 

console.log(sendResponse(document.all[0].outerHTML))
