export function createDivElement(classes = '', id = '') {
  const newDiv = document.createElement('div');

  newDiv.className = classes;
  newDiv.id = id;

  return newDiv;
}
