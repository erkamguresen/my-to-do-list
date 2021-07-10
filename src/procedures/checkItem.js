import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { getLIItem } from '../logic/getLiItem.js';
import { renderToDoList } from './renderList.js';
import { sortList } from './sortList.js';

export function checkItem(event) {
  // get li Element
  const liElement = getLIItem(event);

  // get the id of the item
  const toDoID = parseInt(liElement.dataset.id);

  // get the index of the item
  const toDos = state.toDoLists[state.currentToDoListIndex].toDos;
  const index = toDos.map((toDo) => toDo.itemId).indexOf(toDoID);

  //update the data
  toDos[index].isChecked = !toDos[index].isChecked;

  //save the data
  saveDataSet();

  // render the list data
  const listID = state.toDoLists[state.currentToDoListIndex].listId;
  renderToDoList(listID.toString());

  // sort the list
  sortList();
}
