console.log("Chrome extension activated");

//console.log(document.getElementsByClassName("lolomoRow lolomoRow_title_card"));

document.addEventListener("wheel", bodyScroll);
document.addEventListener("mousedown", reloadDOM);

var scroll_timer = -1;

function bodyScroll(){
    if(scroll_timer != -1){
        clearTimeout(scroll_timer);
    }
    scroll_timer = window.setTimeout("reloadDOM()", 500);
}

var DOM = "";
var title_cards = [];
var title_cards_rows = [];
var movies = [];

function reloadDOM(){
    // Get all the rows containing title cards
    title_cards_rows = document.getElementsByClassName("lolomoRow_title_card");
    console.log(title_cards_rows);
    let title_card = [];
    
    try{
    // For each row, store the movie title of each title card
        for(i = 0; i < title_cards_rows.length; i++){
            title_card = (title_cards_rows[i].
                          childNodes[1].
                          childNodes[0].
                          childNodes[0].
                          childNodes[0]);

            if( title_cards.childNodes.length > 1 ){
                    movies = (title_card.
                              childNodes[1].
                              childNodes[0].
                              childNodes
                             );
            } // end of if block
            else
            {
                movies = (title_card.
                          childNodes[0].
                          childNodes[0].
                          childNodes
                         );
            }
        title_cards.push(movies);
        } // end of for block
    }
    catch(err){
        movies = (title_cards_rows[i].
                    childNodes[0].childNodes[0].
                    childNodes[0].childNodes[0].
                    childNodes[0].childNodes[2].
                    childNodes[0].childNodes[0].alt);
    }
    finally{
        title_cards.push(movies);
        console.log(title_cards_rows);
        console.log(title_cards);
    }
}

let ratings_placeholder = "<p>Ratings go here</p>";
/*
for(i = 0; i < title_cards.length; i++){
    console.log(title_cards[i].innerText);
    // This should move outside and then become innerHTML[last_element] = "<p>Ratings go here</p>"
    title_cards[i].innerHTML += "<p>Ratings go here</p>";
}
*/