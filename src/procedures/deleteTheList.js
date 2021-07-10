import { state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';
import { renderTheListOfLists } from './renderTheListOfLists.js';

/**
 * This function deletes the list for the given id.
 * And saves the new data. Then renders the list of the lists again.
 *
 * @param {string} listID - id of the list to delete
 */
export function deleteTheList(listID) {
  state.toDoLists = state.toDoLists.filter(
    (list) => list.listId !== parseInt(listID)
  );

  saveDataSet();

  renderTheListOfLists();
}
