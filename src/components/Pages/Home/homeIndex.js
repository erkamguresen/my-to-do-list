import { state } from '../../../data/data.js';
import { getDataSet } from '../../../IO/IO-LocalStorage.js';
import { createFormPanel } from '../../shared/formPanel.js';

//setup the state object
state.currentToDoListIndex = -1;
state.toDoLists = getDataSet();

console.log(state);

const mainPanel = document.getElementById('main-panel');
mainPanel.appendChild(createFormPanel());
