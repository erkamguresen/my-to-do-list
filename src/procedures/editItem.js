import { getLIItem } from '../logic/getLiItem.js';

export function editItem(event) {
  const liElement = getLIItem(event);

  const spanElement = liElement.querySelector('span');

  let isEditable = spanElement.getAttribute('contentEditable') === 'true';

  isEditable = !isEditable;

  spanElement.setAttribute('contentEditable', isEditable);

  spanElement.focus();
}

export function disableEditing(event) {
  let targetElement = event.target;

  while (targetElement.nodeName !== 'SPAN') {
    targetElement = targetElement.parentElement;
  }

  targetElement.setAttribute('contentEditable', 'false');
}
