import { state } from '../data/data.js';

//Name of the main save in the local storage system
const localStorageMainSave = 'MyToDoListDataSet';

export function getDataSet() {
  return JSON.parse(localStorage.getItem(localStorageMainSave));
}

export function saveDataSet() {
  const dataJSON = JSON.stringify(state);

  localStorage.setItem(localStorageMainSave, dataJSON);
}
