import {
  listNameEditHandler,
  editFocusOutHandler,
} from '../handlers/listNameHandler.js';

document
  .getElementById('header-title')
  .addEventListener('dblclick', listNameEditHandler);

document
  .getElementById('header-title')
  .addEventListener('focusout', editFocusOutHandler);
