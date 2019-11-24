console.log("Chrome extension activated");

console.log(document.getElementsByClassName("lolomoRow lolomoRow_title_card"));

document.addEventListener("wheel", reloadDOM);
document.addEventListener("mousedown", reloadDOM);

var DOM = "";
var title_cards = [];

function reloadDOM(){
    title_cards = document.getElementsByClassName("lolomoRow_title_card");
    title_cards = (title_cards[0].
                   childNodes[1].
                   childNodes[0].
                   childNodes[0].
                   childNodes[0].
                   childNodes[0].
                   childNodes[0].
                   childNodes
                   );

    for(i = 0; i < title_cards.length; i++){
        console.log(title_cards[i].innerText);
        title_cards[i].innerHTML += "<p>Ratings go here</p>"
    }
}