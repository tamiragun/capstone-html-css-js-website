//Displaying the saved objects on a new page

//Now retrieving this item from local storge AND converting from Json back into javascript:
let retrievedObject = JSON.parse(localStorage.getItem("chosenObject"));

//printing to test. It looks different now from when I printed the original object
console.log(retrievedObject);

//Creating a new element where I can display this saved object in:
let newElement = document.createElement("div");
//Assigning it the retrieved and parsed object:
newElement.innerHTML = `<div class="registry-item" style="float:left; text-align:center">
                <img class="registry-image" src="${retrievedObject.imageSource}" alt="" width="300" height="300">
                <div class="registry-item-description">${retrievedObject.description}</div>
            </div>`;
//Printing to help debug:
console.log(newElement);
//Now trying to display this object on the other page. 
document.getElementById('saved-items').appendChild(newElement);



