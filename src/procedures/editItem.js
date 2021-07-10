import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { getLIItem } from '../logic/getLiItem.js';
import { renderToDoList } from './renderList.js';
import { sortList } from './sortList.js';

export function editItem(event) {
  const liElement = getLIItem(event);

  const spanElement = liElement.querySelector('span');

  let isEditable = spanElement.getAttribute('contentEditable') === 'true';

  isEditable = !isEditable;

  spanElement.setAttribute('contentEditable', isEditable);

  spanElement.focus();
}

export function disableEditing(event) {
  const targetElement = event.target;

  while (targetElement.nodeName !== 'SPAN') {
    targetElement = targetElement.parentElement;
  }

  targetElement.setAttribute('contentEditable', 'false');

  // get the id of the item
  const toDoID = parseInt(targetElement.parentElement.dataset.id);

  // get the index of the item
  const toDos = state.toDoLists[state.currentToDoListIndex].toDos;
  const index = toDos.map((toDo) => toDo.itemId).indexOf(toDoID);

  // update the data
  toDos[index].itemName = targetElement.innerText;

  // save the data
  saveDataSet();

  // render list data
  const listID = state.toDoLists[state.currentToDoListIndex].listId;
  renderToDoList(listID.toString());

  // sort the list
  sortList();
}
