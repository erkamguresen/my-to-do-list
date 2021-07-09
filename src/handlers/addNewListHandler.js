import { createNewList } from '../init/newList.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { renderTheListOfLists } from '../procedures/renderTheListOfLists.js';

export function addNewListHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  // get input value from the form
  const newListName = document.getElementById('addItem').value;

  // clear the input area
  document.getElementById('addItem').value = '';

  // create the new list
  createNewList(newListName);

  //save the state
  saveDataSet();

  //render list
  renderTheListOfLists();
}
