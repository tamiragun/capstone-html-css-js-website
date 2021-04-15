//This form enables the user to submit comments, which then show on the page.

//FIrst, getting hold of the input in the HTML file
let commentForm = document.getElementById("comment-form");
//Then, adding an event listener to that form to fire the function defined below
commentForm.addEventListener('submit', handleForm);

//Defining the function that will get the inputted value and display it on the page
function handleForm(event) { 
    //Preventing the page from refreshing upon submit (see https://stackoverflow.com/a/19454346/12786165):
    event.preventDefault();
    let newComment = document.createElement('p');
    //Using the inputted value from the form to display the comment on the page:
    newComment.innerHTML = document.getElementById("comment-text").value;
    //Displaying the comment on the page:
    document.getElementById("comments-area").appendChild(newComment);
    //Resetting the form values to blank after submit (see https://stackoverflow.com/a/20417453/12786165):
    commentForm.reset();
} 
