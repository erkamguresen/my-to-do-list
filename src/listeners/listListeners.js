import { editFocusOutHandler } from '../handlers/editFocusOutHandler.js';
import { listItemsHandler } from '../handlers/listItemsHandler.js';

document
  .getElementById('item-list')
  .addEventListener('click', listItemsHandler);

document
  .getElementById('item-list')
  .addEventListener('dblclick', listItemsHandler);

document
  .getElementById('item-list')
  .addEventListener('focusout', editFocusOutHandler);
