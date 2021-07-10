import { state } from '../data/data.js';

export function opeTheList(listID) {
  // TODO: open then list

  const mainPanel = document.getElementById('main-panel');

  // clear the container
  while (mainPanel.firstChild) {
    mainPanel.removeChild(mainPanel.firstChild);
  }

  const index = state.toDoLists.map((e) => e.listId).indexOf(parseInt(listID));

  //change the header to show the list name
  const header = document.getElementById('header-title');
  header.innerText = state.toDoLists[index].listName;

  // append the form area

  // render the list
}
