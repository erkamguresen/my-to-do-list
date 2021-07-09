export function createSpan(textForSpan) {
  const newSpan = document.createElement('span');
  newSpan.contentEditable = false;
  newSpan.innerText = textForSpan;

  return newSpan;
}
