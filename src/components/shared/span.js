/**
 * This function creates a new span element
 * and returns it with specified properties.
 *
 * @param {string} classes - names of classes for the element to be added.
 * @param {string} id - unique id for the element
 * @returns {object} - a new span element
 */
export function createSpanElement(classes = '', textForSpan) {
  const newSpan = document.createElement('span');
  newSpan.className = classes;
  newSpan.contentEditable = false;
  newSpan.innerText = textForSpan;

  return newSpan;
}
