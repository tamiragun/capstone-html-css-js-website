//Trying to save an object for later....

//First, identifying the buttons to do this for
let registryButton = $('.registry-button');
//Then, adding an event listener and function to them
registryButton.click(test);
//Declaring an empty string to store saved objects in
let savedObjects = [];
//Instantiating an object for saved items:
function Item(description, imageSource) {
    this.description = description;
    this.imageSource = imageSource;
}


//Defining the function that will save the description of the selected item into local storage
function test(){
    //Getting the stored list of objects
    savedObjects = JSON.parse(localStorage.getItem("items"));
    //Identifying elements to be saved to localStorage. 
    let chosenObjectText = $(this).siblings('.registry-item-description');
    let chosenObjectImage = $(this).siblings('.registry-image');
    //storing this data into an Item object
    let chosenObjectItem = new Item(chosenObjectText.html(),chosenObjectImage.attr('src'));
    //Adding the item to the array of saved items
    savedObjects.push(chosenObjectItem);
    //Storing the array back into local storage
    localStorage.setItem("items", JSON.stringify(savedObjects));
};



//Creating a like-unlike button for each registry item:
//https://jsfiddle.net/fedmich/DTAbj/
$(function() {
    $('.like-button').click(function(event){
        //Preventing the doc from sliding to the top each time:
        event.preventDefault(); 
        //This checks what the current state is of the button, and then toggles it to the opposite state
        let obj = $(this);
        if( obj.data('liked') ){
            obj.data('liked', false);
            obj.html('Like');
        }
        else{
            obj.data('liked', true);
            obj.html('Unlike');
        }
    });
});