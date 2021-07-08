import { createUlElement } from '../components/ulElement.js';
import { currentData } from '../data/data.js';

export function renderToDoList() {
  //TODO: sort the data
  document
    .getElementById('list-container')
    .appendChild(createUlElement(currentData.currentToDoList));
}
