import { getLIItem } from '../logic/getLiItem.js';

export function editItem(event) {
  const liElement = getLIItem(event);
  //TODO: edit item function
  console.log('edit function');
  console.log(liElement);
}
