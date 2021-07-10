import { deleteTheList } from '../procedures/deleteTheList.js';
import { opeTheList } from '../procedures/openTheList.js';

/** This handler handles the click events on the list items.
 * If delete button part is clicked it will delete the list item.
 * If any part other then delete button is clicked it will open the
 * list in the page.
 *
 * @param {object} event - Event object
 */
export function listOfTheListHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  let target = event.target;

  while (target.nodeName !== 'LI') {
    target = target.parentNode;
  }

  const listId = target.dataset.id;

  if (event.target.classList.contains('delete')) {
    deleteTheList(listId);
  } else {
    opeTheList(listId);
  }
}
