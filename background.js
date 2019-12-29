console.log("background running");

chrome.runtime.onMessage.addListener(receiver);

// TODO: Find a way of securely storing the API key
var api_key = ""
// example request: https://api.themoviedb.org/3/movie/550?api_key=aeb21d85f352c4c50978e7ff8fe8177b

function receiver(request, sender, sendResponse){
    console.log(request);
    let movie = Object.keys(request)[0];
    movie = '"' + movie + '"';  // phrase match
    let search = 'https://api.themoviedb.org/3/search/movie?api_key=' + 
                 api_key + 
                 '&query=' + movie;
    // Make the request to the API endpoint and handle it
    let rating = $.getJSON(search);
    console.log(rating);

}