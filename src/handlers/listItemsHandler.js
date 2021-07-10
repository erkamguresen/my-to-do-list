import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { checkItem } from '../procedures/checkItem.js';
import { deleteItem } from '../procedures/deleteItem.js';
import { editItem } from '../procedures/editItem.js';
import { filterItems } from '../procedures/filterList.js';
import { renderToDoList } from '../procedures/renderList.js';

export function listItemsHandler(event) {
  event.preventDefault();

  switch (event.type) {
    case 'click':
      if (event.target.classList.contains('delete')) {
        deleteItem(event);
      } else if (event.target.classList.contains('edit')) {
        editItem(event);
      } else if (event.target.classList.contains('check')) {
        checkItem(event);
      }
      break;

    case 'dblclick':
      if (event.target.nodeName === 'SPAN') {
        editItem(event);
      }
      break;
  }
}

export function addItemHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  //get new input value
  const newItemName = document.getElementById('addItem').value;

  // clear the input area
  document.getElementById('addItem').value = '';

  const newToDo = {
    itemId: Date.now(),
    itemName: newItemName,
    isChecked: false,
  };

  const currentList = state.toDoLists[state.currentToDoListIndex];

  currentList.toDos.push(newToDo);

  //save the state
  saveDataSet();

  // render the list
  renderToDoList(currentList.listId);
}

export function filterItemsHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  filterItems(event);
}
