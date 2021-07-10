import { createLiItem } from '../components/Pages/toDoList/listItem.js';
import { createDivElement } from '../components/shared/divElement.js';
import { state } from '../data/data.js';
import { sortList } from './sortList.js';

export function renderToDoList(listID) {
  const mainPanel = document.getElementById('main-panel');

  // get the index of the list
  const index = state.toDoLists.map((e) => e.listId).indexOf(parseInt(listID));

  const list = state.toDoLists[index];

  // get the list container
  let listContainer = document.getElementById('list-container');

  // delete existing list container
  if (listContainer !== null) {
    mainPanel.removeChild(listContainer);
  }

  // create new list container
  listContainer = createDivElement('', 'list-container');
  mainPanel.appendChild(listContainer);

  // create an ul element
  const ulElement = document.createElement('ul');
  ulElement.className = 'list-group';
  ulElement.id = 'item-list';

  listContainer.appendChild(ulElement);

  for (let index = 0; index < list.toDos.length; index++) {
    const toDo = list.toDos[index];

    const listItemElement = createLiItem(toDo);

    ulElement.appendChild(listItemElement);
  }

  if (list.toDos.length === 0) {
    ulElement.innerHTML = '<p class="text-center">The list is empty.</p>';
  } else {
    //sort the list
    sortList();
  }
}
