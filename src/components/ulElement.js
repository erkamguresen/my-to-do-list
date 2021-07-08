import { createLiElement } from './liElement';

export function createUlElement(listArray) {
  const ulElement = document.createElement('ul');

  listArray.forEach((listItem) => {
    const liElement = createLiElement(listItem);

    ulElement.appendChild(liElement);
  });

  return ulElement;
}
