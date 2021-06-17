import { getLIItem } from '../logic/getLiItem.js';

export function deleteItem(event) {
  const itemList = document.getElementById('item-list');

  const liElement = getLIItem(event);
  itemList.removeChild(liElement);
}
