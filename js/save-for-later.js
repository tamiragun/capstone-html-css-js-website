//Trying to save an object for later....

//First, identifying the buttons to do this for
let registryButton = $('.registry-button');
//Then, adding an event listener and function to them
registryButton.click(test);

//Defining the function that will dave the description of the selected item into local storage
function test(){
    //First, selecting an element to be saved to LoccalStorage. I am just seleciting the description for now, instead of a whole div
    let chosenObject = $(this).siblings('.registry-item-description');
    //Testing by adding an alert
    alert(chosenObject.html());
    //Storing the selected object
    localStorage.setItem("chosenObject", JSON.stringify(chosenObject));
    //Testing by printing it out:
    console.log(chosenObject);
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