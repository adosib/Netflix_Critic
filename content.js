console.log("Chrome extension activated");

/*
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
*/

document.addEventListener("wheel", reloadDOM);
document.addEventListener("mousedown", reloadDOM);

var DOM = "";
var reg = [];

function reloadDOM(){
    // If user scrolls or clicks, parse the DOM again since elements are
    // dynamically loaded
    DOM = document.all[0].outerHTML
    // Get the text between '"fallback-text">' and '</p>'.
    // This is the title of the movie.
    reg = DOM.match(/(?<="fallback-text"\>\s*).*?(?=\s*\<\/p\>)/gs)
    console.log(reg)
}

console.log(sendResponse(document.all[0].outerHTML))
