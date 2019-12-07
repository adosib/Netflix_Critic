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

function reloadDOM(){
    // Get all the rows containing title cards
    title_cards_rows = document.getElementsByClassName("lolomoRow_title_card");
    console.log(title_cards_rows);
    // An array to hold a NodeList of movie data for each title_cards_rows object
    var movie_node_list = [];
    // An array to hold movie titles
    var movie = [];
    
    // For each row, store the movie title of each title card
    for(i = 0; i < title_cards_rows.length; i++){
        // Assign the class name (string) to a variable in order to appropriately 
        // deal with the different kinds of row classes.
        var row_i = title_cards_rows[i];
        var class_name = row_i.className;
        switch(class_name){
                case "lolomoRow lolomoRow_title_card lolomoBigRow":
                    movie = (row_i.childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[2].
                                    childNodes[0].childNodes[0].alt
                            );
                    title_cards.push(movie);
                    break;
                default:
                    movie_node_list = (row_i.childNodes[1].childNodes[0].
                                             childNodes[0].childNodes[0]
                                      );
                    
                    if( title_cards.childNodes.length > 1 ){
                            movie = (movie_node_list.
                                        childNodes[1].
                                        childNodes[0].
                                        childNodes
                                        );
                    } // end of if block
                    else
                    {
                        movie = (movie_node_list.
                                    childNodes[0].
                                    childNodes[0].
                                    childNodes
                                    );
                    }
                    break;
        } // end switch statement

    title_cards.push(movie);
    } // end of for block

    title_cards.push(movie);
    console.log(title_cards_rows);
    console.log(title_cards);
}

let ratings_placeholder = "<p>Ratings go here</p>";
/*
for(i = 0; i < title_cards.length; i++){
    console.log(title_cards[i].innerText);
    // This should move outside and then become innerHTML[last_element] = "<p>Ratings go here</p>"
    title_cards[i].innerHTML += "<p>Ratings go here</p>";
}
*/