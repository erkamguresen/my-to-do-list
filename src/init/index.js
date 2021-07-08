import { createUlElement } from '../components/ulElement.js';
import { currentData } from '../data/data.js';
import '../listeners/addFormListeners.js';
import '../listeners/listListeners.js';
import '../listeners/listNameListener.js';

document
  .getElementById('list-container')
  .appendChild(createUlElement(currentData.currentToDoList));
