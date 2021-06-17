import { createNewLIItem } from '../procedures/addItem.js';
import { checkItem } from '../procedures/checkItem.js';
import { deleteItem } from '../procedures/deleteItem.js';
import { editItem } from '../procedures/editItem.js';
import { filterItems } from '../procedures/filterList.js';
import { sortList } from '../procedures/sortList.js';

export function listItemsHandler(event) {
  event.preventDefault();

  if (event.target.classList.contains('delete')) {
    deleteItem(event);
  }
  if (event.target.classList.contains('edit')) {
    editItem(event);
  }
  if (event.target.classList.contains('check')) {
    checkItem(event);
  }
}

export function addItemHandler(event) {
  event.preventDefault();
  //Get Input value
  let newItem = document.getElementById('addItem');

  //get text value
  let newItemValue = newItem.value;

  if (newItemValue !== '') {
    let newLi = createNewLIItem(newItemValue);

    let itemList = document.getElementById('item-list');

    itemList.appendChild(newLi);

    //delete the text from the formatting
    newItem.value = '';

    sortList();
  }
}

export function filterItemsHandler(event) {
  event.preventDefault();

  filterItems(event);
}
