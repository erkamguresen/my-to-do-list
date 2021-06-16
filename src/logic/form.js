let form = document.getElementById("addForm");

let itemList = document.getElementById("items");

let filter = document.getElementById("filter");

//Form Submit Event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter&search event (use input not keyup for smooth delete and write)
filter.addEventListener("input", filterItems);

//Add Item
function addItem(e) {
  e.preventDefault();

  //Get Input value
  let newItem = document.getElementById("addItem");

  //get text value
  let newItemValue = newItem.value;

  //Create new li Element
  let newLi = document.createElement("li");

  //Add Class to Li
  newLi.className = "list-group-item";

  //Add text node with input value
  newLi.appendChild(document.createTextNode(newItemValue));

  //create delete Button
  let deleteButton = document.createElement("button");

  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.textContent = "X";

  newLi.appendChild(deleteButton);

  itemList.appendChild(newLi);

  //delete the text from the formatting
  newItem.value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    let currentLi = e.target.parentElement;

    //there is formatting and extra X so use first child which is the only tex node :-)
    let text = currentLi.firstChild.textContent.trim();

    let isConfirmed = confirm(`Are you sure you want to delete:    ${text} ?`);

    if (isConfirmed) {
      itemList.removeChild(currentLi);
    }
  }
}

function filterItems(e) {
  //get the search text and convert to lowercase
  let searchText = e.target.value.toLocaleLowerCase();

  let items = itemList.getElementsByTagName("li");

  //convert to an array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;

    //If the searched text is not in the array it will return -1
    if (itemName.toLocaleLowerCase().indexOf(searchText) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
