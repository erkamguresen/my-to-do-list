import { listOfTheListHandler } from '../../../handlers/listOfTheListHandler.js';
import { createSpanElement } from '../../shared/span.js';
import { createDivElement } from '../../shared/divElement.js';
import { createButtonElement } from '../../shared/buttonElement.js';
import { createDeleteIcon } from '../../icons/deleteIcon.js';

export function createListItemElement(list) {
  const numberOfItems = list.toDos.length;

  const liElement = document.createElement('li');
  liElement.className = 'list-group-item';
  liElement.dataset.id = list.listId;

  liElement.appendChild(createSpanElement('', list.listName));

  //aa div to more right
  const buttonsDiv = createDivElement('float-right align-middle');

  // add a badge to show number of items in the list
  buttonsDiv.appendChild(
    createSpanElement('badge badge-primary badge-pill mr-4', numberOfItems)
  );

  const deleteButton = createButtonElement(
    'button',
    'btn btn-outline-danger btn-sm delete no-border',
    '',
    createDeleteIcon()
  );
  buttonsDiv.appendChild(deleteButton);

  liElement.appendChild(buttonsDiv);

  // add listener
  liElement.addEventListener('click', listOfTheListHandler);

  return liElement;
}
