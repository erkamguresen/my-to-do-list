import { createDivElement } from './divElement';
import { createCheckIcon } from './icons/checkIcon';
import { createSpan } from './span';

export function createLiElement(textForListItem) {
  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';

  newLi.appendChild(createCheckIcon());

  newLi.appendChild(createSpan(textForListItem));

  const buttonsDiv = createDivElement('float-right align-middle');

  newLi.appendChild(buttonsDiv);
  //TODO:button div

  return newLi;
}
