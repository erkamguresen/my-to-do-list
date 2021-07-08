import { editFocusOutHandler } from '../handlers/editFocusOutHandler.js';
import { listItemsHandler } from '../handlers/listItemsHandler.js';

document
  .getElementById('list-container')
  .addEventListener('click', listItemsHandler);

document
  .getElementById('list-container')
  .addEventListener('dblclick', listItemsHandler);

document
  .getElementById('list-container')
  .addEventListener('focusout', editFocusOutHandler);
