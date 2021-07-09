export function createSpan(classes = '', textForSpan) {
  const newSpan = document.createElement('span');
  newSpan.className = classes;
  newSpan.contentEditable = false;
  newSpan.innerText = textForSpan;

  return newSpan;
}
