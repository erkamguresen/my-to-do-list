import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';

export function listNameEditHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  if (state.currentToDoListIndex >= 0) {
    const headerElement = event.target;

    let isEditable = headerElement.getAttribute('contentEditable') === 'true';

    isEditable = !isEditable;

    headerElement.setAttribute('contentEditable', isEditable);

    headerElement.focus();
  }
}

export function editFocusOutHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const headerElement = event.target;

  headerElement.setAttribute('contentEditable', 'false');

  // update the data
  state.toDoLists[state.currentToDoListIndex].listName =
    headerElement.innerText;

  // save the data
  saveDataSet();
}
