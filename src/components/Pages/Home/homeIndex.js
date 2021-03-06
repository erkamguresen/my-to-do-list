import { state } from '../../../data/data.js';
import { addNewListHandler } from '../../../handlers/addNewListHandler.js';
import { filterListsHandler } from '../../../handlers/filterListsHandler.js';
import { getDataSet } from '../../../IO/IO-LocalStorage.js';
import { renderTheListOfLists } from '../../../procedures/renderTheListOfLists.js';
import { createFormPanel } from '../../shared/formPanel.js';

//setup the state object
state.currentToDoListIndex = -1;
if (getDataSet() !== null) {
  state.toDoLists = getDataSet().toDoLists;
}

console.log(state);

// the add and search form part
const mainPanel = document.getElementById('main-panel');
mainPanel.appendChild(createFormPanel());

// add listeners to the form
document
  .getElementById('addForm')
  .addEventListener('submit', addNewListHandler);

document
  .getElementById('addItem')
  .addEventListener('input', filterListsHandler);

// render the list of lists
renderTheListOfLists();
