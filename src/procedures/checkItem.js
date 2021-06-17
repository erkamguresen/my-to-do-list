import { getLIItem } from '../logic/getLiItem.js';

export function checkItem(event) {
  const liElement = getLIItem(event);

  const checkBox = liElement.querySelector('.check');

  const spanElement = liElement.querySelector('span');

  const classList = checkBox.classList;

  if (
    classList.contains('fa-square') &&
    !classList.contains('fa-check-square')
  ) {
    classList.remove('fa-square');
    classList.add('fa-check-square');
  } else if (classList.contains('fa-check-square')) {
    classList.remove('fa-check-square');
    classList.add('fa-square');
  }
}
