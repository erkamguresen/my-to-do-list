import { createNewLIItem } from '../procedures/addItem.js';
import { filterItems } from '../procedures/filterList.js';

export function listItemsHandler(event) {
  event.preventDefault();
  console.log('listItemsHandler');
  console.log(event.type);
  if (event.target.classList.contains('delete')) {
    console.log('delete');
    console.log(event.currentTarget);
  }
  if (event.target.classList.contains('edit')) {
    console.log('edit');
    console.log(event.currentTarget);
  }
  if (event.target.classList.contains('check')) {
    console.log('check');
    console.log(event.currentTarget);
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
  }
}

export function filterItemsHandler(event) {
  event.preventDefault();
  console.log('filterItemsHandler');
  console.log(event.type);
  console.log(event.target.value);
  filterItems(event);
}
