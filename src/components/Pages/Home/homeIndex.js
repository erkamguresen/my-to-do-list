import { state } from '../../../data/data.js';
import { getDataSet } from '../../../IO/IO-LocalStorage.js';

//setup the state object
state.currentToDoListIndex = -1;
state.toDoLists = getDataSet();

console.log(state);
