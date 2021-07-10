import { createListItemElement } from '../components/Pages/Home/listItem.js';
import { createDivElement } from '../components/shared/divElement.js';
import { state } from '../data/data.js';

export function renderTheListOfLists() {
  const mainPanel = document.getElementById('main-panel');
  let listContainer = document.getElementById('list-container');

  const lists = state.toDoLists;

  // update the list index in state
  state.currentToDoListIndex = -1;

  // delete existing list container
  if (listContainer !== null) {
    mainPanel.removeChild(listContainer);
  }

  // create  new list container
  listContainer = createDivElement('', 'list-container');
  mainPanel.appendChild(listContainer);

  // create an ul element
  const ulElement = document.createElement('ul');
  ulElement.className = 'list-group';
  ulElement.id = 'item-list';

  listContainer.appendChild(ulElement);

  for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    const listItemElement = createListItemElement(list);

    ulElement.appendChild(listItemElement);
  }

  if (lists.length === 0) {
    ulElement.innerHTML =
      '<p class="text-center">There is no list to show.</p>';
  }
}
