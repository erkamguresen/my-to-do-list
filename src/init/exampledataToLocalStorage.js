import { exampleData, state } from '../data/data.js';
import { saveDataSet } from '../IO/IO-LocalStorage.js';

export async function setMyToDoListDataSet() {
  if (localStorage.getItem('MyToDoListDataSet') === null) {
    state.toDoLists = exampleData.toDoLists;

    await saveDataSet();
  }
}

setMyToDoListDataSet();
