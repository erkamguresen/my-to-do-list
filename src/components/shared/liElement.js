import { createButtonElement } from './buttonElement.js';
import { createDivElement } from './divElement.js';
import { createCheckIcon } from './icons/checkIcon.js';
import { createDeleteIcon } from './icons/deleteIcon.js';
import { createEditIcon } from './icons/editIcon.js';
import { createSpan } from './span.js';

export function createLiElement(textForListItem) {
  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';

  newLi.appendChild(createCheckIcon());

  newLi.appendChild(createSpan(textForListItem));

  const buttonsDiv = createDivElement('float-right align-middle');

  const editButton = createButtonElement(
    'button',
    'btn btn-sm btn-outline-primary no-border mr-1 edit',
    '',
    createEditIcon()
  );
  buttonsDiv.appendChild(editButton);

  const deleteButton = createButtonElement(
    'button',
    'btn btn-outline-danger btn-sm delete no-border',
    '',
    createDeleteIcon()
  );
  deleteButton.setAttribute('data-bs-toggle', 'modal');
  deleteButton.setAttribute('data-bs-target', '#staticBackdrop');

  buttonsDiv.appendChild(deleteButton);

  newLi.appendChild(buttonsDiv);

  return newLi;
}
