import { exampleData } from '../data/data.js';

export function setMyToDoListDataSet() {
  const dataSet = exampleData;
  const dataJSON = JSON.stringify(dataSet);

  localStorage.setItem('MyToDoListDataSet', dataJSON);
}
