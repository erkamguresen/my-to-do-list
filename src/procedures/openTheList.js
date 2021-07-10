import { createFormPanel } from '../components/shared/formPanel.js';
import { state } from '../data/data.js';
import {
  addItemHandler,
  filterItemsHandler,
} from '../handlers/listItemsHandler.js';
import { renderToDoList } from './renderList.js';

export function opeTheList(listID) {
  const mainPanel = document.getElementById('main-panel');

  // clear the container
  while (mainPanel.firstChild) {
    mainPanel.removeChild(mainPanel.firstChild);
  }

  const index = state.toDoLists.map((e) => e.listId).indexOf(parseInt(listID));

  // change the header to show the list name
  const header = document.getElementById('header-title');
  header.innerText = state.toDoLists[index].listName;

  // append the form area
  mainPanel.appendChild(createFormPanel('Add New Item'));

  // add listeners to the form
  document.getElementById('addForm').addEventListener('submit', addItemHandler);

  document
    .getElementById('addItem')
    .addEventListener('input', filterItemsHandler);

  // render the list
  renderToDoList(listID);
}
