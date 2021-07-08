import { getLIItem } from '../logic/getLiItem.js';
import { sortList } from './sortList.js';

export function checkItem(event) {
  //TODO: data schema
  //TODO: data with checked property
  //TODO: render wrt checked property
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

  sortList();
}
