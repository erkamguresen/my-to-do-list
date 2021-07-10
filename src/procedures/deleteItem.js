import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { getLIItem } from '../logic/getLiItem.js';
import { renderToDoList } from './renderList.js';
import { sortList } from './sortList.js';

export function deleteItem(event) {
  const itemList = document.getElementById('item-list');

  console.log('delete');

  const liElement = getLIItem(event);
  itemList.removeChild(liElement);

  // get the id of the item
  const toDoID = parseInt(liElement.dataset.id);

  // get the toDos
  const toDos = state.toDoLists[state.currentToDoListIndex].toDos;
  // const index = toDos.map((toDo) => toDo.itemId).indexOf(toDoID);

  // delete the item form the data
  state.toDoLists[state.currentToDoListIndex].toDos = toDos.filter(
    (todo) => todo.itemId !== parseInt(toDoID)
  );

  //save the data
  saveDataSet();

  // render the list data
  const listID = state.toDoLists[state.currentToDoListIndex].listId;
  renderToDoList(listID.toString());

  // sort the list
  sortList();
}
