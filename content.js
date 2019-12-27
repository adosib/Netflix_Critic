console.log("Chrome extension activated");

//console.log(document.getElementsByClassName("lolomoRow lolomoRow_title_card"));

document.addEventListener("wheel", bodyScroll);
document.addEventListener("mousedown", click);

var scroll_timer = -1;

function bodyScroll(){
    if(scroll_timer != -1){
        clearTimeout(scroll_timer);
    }
    scroll_timer = window.setTimeout("reloadDOM()", 500);
}

function click(){
    setTimeout(reloadDOM, 1000);
}

var title_cards_set = new Set();
var title_cards_dict = {};

function reloadDOM(){
    // Get all the rows containing title cards
    let title_cards_rows = document.getElementsByClassName("lolomoRow_title_card");
    // An array to hold a NodeList of movie data for each title_cards_rows object
    var movie_node_list = [];
    // For each row, store the movie title of each title card
    for(i = 0; i < title_cards_rows.length; i++){
        // Assign the class name (string) to a variable in order to appropriately 
        // deal with the different kinds of row classes.
        var row_i = title_cards_rows[i];
        var class_name = row_i.className;
        switch(class_name){
                case "lolomoRow lolomoRow_title_card lolomoBigRow":
                    // An array to hold movie titles
                    let movie = [];
                    movie = (row_i.childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[2].
                                    childNodes[0].childNodes[0].alt
                            );
                    title_cards_set.add(movie);
                    break;
                default:
                    movie_node_list = (row_i.childNodes[1].childNodes[0].
                                             childNodes[0].childNodes[0]
                                      );
                    let movies = movie_node_list.getElementsByClassName('slider-item');
        
                    for(j = 0; j < movies.length; j++){
                        try{
                            // Assign the movie title to the variable movie
                            let movie = movies[j].getElementsByClassName('fallback-text-container')[0].innerText;
                            let title_set_size = title_cards_set.size; // current size of set
                            title_cards_set.add(movie);  // add the movie
                            if(title_cards_set.size > title_set_size){  // if the set has increased in size
                                title_cards_dict[movie] = getRating();  // add the movie, rating pair to the dict
                            }

                            let rating = title_cards_dict[movie];
                            if(movies[j].lastChild.innerText == rating){}
                            else{
                                movies[j].innerHTML += "<p>" + rating + "</p>";
                            }
                        }
                        catch(err){
                            continue;
                        }
                    }

                    break;
        } // end switch statement

    } // end of for block
    console.log(title_cards_set);
    console.log(title_cards_set.size);
    console.log(title_cards_dict);
}

function getRating(){
    let rating = Math.floor(Math.random() * 100) + "%";
    return rating;
}