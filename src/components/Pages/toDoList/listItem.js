import { createCheckIcon } from '../../icons/checkIcon.js';
import { createDeleteIcon } from '../../icons/deleteIcon.js';
import { createEditIcon } from '../../icons/editIcon.js';
import { createButtonElement } from '../../shared/buttonElement.js';
import { createDivElement } from '../../shared/divElement.js';
import { createSpanElement } from '../../shared/span.js';

/**
 * This function get a todo object and it creates a list item for it.
 *
 * @param {object} toDo - toDo object to render
 * @returns {object} - a list item containing the todo object
 */
export function createLiItem(toDo) {
  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';
  newLi.dataset.id = toDo.itemId;

  newLi.appendChild(createCheckIcon(toDo.isChecked));

  newLi.appendChild(createSpanElement('', toDo.itemName));

  const newButtonDiv = createDivElement('float-right align-middle');
  newLi.appendChild(newButtonDiv);

  // edit button
  newButtonDiv.appendChild(
    createButtonElement(
      'button',
      'btn btn-sm btn-outline-primary no-border mr-1 edit',
      '',
      createEditIcon()
    )
  );

  // delete button
  newButtonDiv.appendChild(
    createButtonElement(
      'button',
      'btn btn-outline-danger btn-sm delete no-border',
      '',
      createDeleteIcon()
    )
  );

  return newLi;
}
