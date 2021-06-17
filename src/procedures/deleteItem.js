import { getLIItem } from '../logic/getLiItem.js';

export function deleteItem(event) {
  //TODO: delete item function
  const liElement = getLIItem(event);

  console.log('delete function');
  console.log(liElement);
}
