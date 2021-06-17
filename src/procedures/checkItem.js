import { getLIItem } from '../logic/getLiItem.js';

export function checkItem(event) {
  const liElement = getLIItem(event);
  //TODO check item box state
  console.log('check function');
  console.log(liElement);
}
