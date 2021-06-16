import {
  addItemHandler,
  filterItemsHandler,
} from '../handlers/listItemsHandler.js';

document.getElementById('addForm').addEventListener('submit', addItemHandler);

document
  .getElementById('addItem')
  .addEventListener('input', filterItemsHandler);
