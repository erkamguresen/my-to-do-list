import { filterItems } from '../procedures/filterList.js';

export function filterListsHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  filterItems(event);
}
