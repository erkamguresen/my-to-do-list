import { createCheckIcon } from '../../icons/checkIcon.js';
import { createDivElement } from '../../shared/divElement.js';
import { createSpanElement } from '../../shared/span.js';

/**
 * This function get a todo object and it creates a list item for it.
 *
 * @param {object} toDo - toDo object to render
 * @returns {object} - a list item containing the todo object
 */
export function createLiItem(toDo) {
  // export function createLiItem(newItemValue) {

  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';
  newLi.dataset.id = toDo.itemId;

  // TODO: if checked
  //   const newCheckIcon = document.createElement('i');
  //   newCheckIcon.className =
  //     'far fa-square align-middle mr-3 check btn-outline-success';
  //   newCheckIcon.style.fontSize = '2rem';

  newLi.appendChild(createCheckIcon());

  //   const newSpan = document.createElement('span');
  //   newSpan.contentEditable = false;
  //   newSpan.textContent = toDo.itemName;
  newLi.appendChild(createSpanElement('', toDo.itemName));

  //   const newButtonDiv = document.createElement('div');
  //   newButtonDiv.className = 'float-right align-middle';
  const newButtonDiv = createDivElement('float-right align-middle');
  newLi.appendChild(newButtonDiv);

  console.log(newLi);

  const newEditButton = document.createElement('button');
  newEditButton.className =
    'btn btn-sm btn-outline-primary no-border mr-1 edit';

  const newEditIcon = document.createElement('i');
  newEditIcon.className = 'fas fa-pencil-alt edit';
  newEditIcon.style.fontSize = '1.2rem';

  newEditButton.appendChild(newEditIcon);

  newButtonDiv.appendChild(newEditButton);

  const newDeleteButton = document.createElement('button');
  newDeleteButton.className = 'btn btn-outline-danger btn-sm delete no-border';

  const newDeleteIcon = document.createElement('i');
  newDeleteIcon.className = 'fas fa-trash-alt delete';
  newDeleteButton.appendChild(newDeleteIcon);
  newButtonDiv.appendChild(newDeleteButton);

  newLi.appendChild(newButtonDiv);

  //TODO: reset filter in new refactored code
  //   resetFilter();

  return newLi;
}
