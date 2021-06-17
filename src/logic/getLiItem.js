export function getLIItem(event) {
  let element = event.target;

  while (element.nodeName !== 'LI') {
    element = element.parentElement;
  }

  return element;
}
