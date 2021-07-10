import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { renderTheListOfLists } from './renderTheListOfLists.js';

export function deleteTheList(listID) {
  console.log(`delete ${listID}`);
  console.log(typeof listID);

  state.toDoLists = state.toDoLists.filter(
    (list) => list.listId !== parseInt(listID)
  );

  saveDataSet();

  renderTheListOfLists();
}
