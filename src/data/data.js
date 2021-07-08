//TODO drag drop
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list

import { getMyToDoListDataSet } from '../IO/IO-LocalStorage.js';

/**
 * This is for all ToDo lists. It gets from local storage
 * or creates a new empty one
 */
export const myToDoListDataBase = {
  myToDoLists: getMyToDoListDataSet() || [],
};

export const currentData = {
  currentToDoListName: '',
  currentToDoList: ['o', 'bu', 'su', 'etc'],
};
