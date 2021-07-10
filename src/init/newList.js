import { state } from '../data/data.js';

export function createNewList(nameOfTheList) {
  const newList = {
    listName: nameOfTheList,
    listId: Date.now(),
    toDos: [],
  };

  state.toDoLists.push(newList);
}
