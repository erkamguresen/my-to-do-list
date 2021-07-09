import { openTheListHandler } from '../../../handlers/openTheListHandler.js';
import { createSpan } from '../../shared/span.js';

export function createListItemElement(list) {
  const numberOfItems = list.toDos.length;

  const liElement = document.createElement('li');
  liElement.className =
    'list-group-item d-flex justify-content-between align-items-center';
  liElement.dataset.id = list.listId;

  liElement.innerText = list.listName;

  // add a badge to show number of items in the list
  liElement.appendChild(
    createSpan('badge badge-primary badge-pill', numberOfItems)
  );

  // add listener
  liElement.addEventListener('click', openTheListHandler);

  return liElement;
}
