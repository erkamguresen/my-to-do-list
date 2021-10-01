import { exampleData } from '../data/data.js';

export function setMyToDoListDataSet() {
  if (localStorage.getItem('myToDoListDataSet') === null) {
    localStorage.setItem('myToDoListDataSet', JSON.stringify(exampleData));
  }
}
