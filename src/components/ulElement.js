import { createLiElement } from './liElement.js';

export function createUlElement(listArray) {
  const ulElement = document.createElement('ul');
  ulElement.className = 'list-group';

  listArray.forEach((listItem) => {
    const liElement = createLiElement(listItem);

    ulElement.appendChild(liElement);
  });

  return ulElement;
}
