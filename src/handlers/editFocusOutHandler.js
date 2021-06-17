import { disableEditing } from '../procedures/editItem.js';

export function editFocusOutHandler(event) {
  event.preventDefault();

  if (event.target.nodeName === 'SPAN' || event.target.nodeName === 'DEL') {
    disableEditing(event);
  }
}
