import { filterItems } from '../procedures/filterList.js';

export function filterListsHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  console.log(event);

  filterItems(event);
  //TODO: handle
}
