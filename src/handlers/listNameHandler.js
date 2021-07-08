export function listNameEditHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const headerElement = event.target;

  let isEditable = headerElement.getAttribute('contentEditable') === 'true';

  isEditable = !isEditable;

  headerElement.setAttribute('contentEditable', isEditable);

  headerElement.focus();
}

export function editFocusOutHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const headerElement = event.target;

  headerElement.setAttribute('contentEditable', 'false');
}
