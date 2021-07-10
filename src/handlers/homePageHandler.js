import { createFormPanel } from '../components/shared/formPanel.js';
import { renderTheListOfLists } from '../procedures/renderTheListOfLists.js';
import { addNewListHandler } from './addNewListHandler.js';
import { filterListsHandler } from './filterListsHandler.js';

export function homePageHandler(event) {
  const mainPanel = document.getElementById('main-panel');

  // clear the container
  while (mainPanel.firstChild) {
    mainPanel.removeChild(mainPanel.firstChild);
  }

  //change the header to show the list name
  const header = document.getElementById('header-title');
  header.innerText = 'My Lists';

  // the add and search form part
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
}
