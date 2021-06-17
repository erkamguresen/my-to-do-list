import { listItemsHandler } from '../handlers/listItemsHandler.js';

document
  .getElementById('item-list')
  .addEventListener('click', listItemsHandler);
