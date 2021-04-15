//Displaying the saved objects on a new page

//Retrieving this list from local storge AND converting from Json back into javascript:
let savedObjects = JSON.parse(localStorage.getItem("items"));

//Looping through the list of saved objects, and for each saved object displayingit on this page:
savedObjects.forEach(function(p) {//Loop through each person (p) in the pers array
    //Creating a new element where I can display this saved object in:
    let newElement = document.createElement("div");
    //Assigning it the desired HTML eith the retrieved and parsed object attributes:
    newElement.innerHTML = `<div class="registry-item" style="float:left; text-align:center">
                    <img class="registry-image" src="${p.imageSource}" alt="" width="300" height="300">
                    <div class="registry-item-description">${p.description}</div>
                </div>`;
    //Displaying this object on the page:
    document.getElementById('saved-items').appendChild(newElement);
});



