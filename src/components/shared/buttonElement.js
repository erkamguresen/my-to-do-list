export function createButtonElement(
  type = 'button',
  classes = '',
  id = '',
  icon = null
) {
  const newButton = document.createElement('button');
  newButton.type = type;
  newButton.className = classes;
  newButton.id = id;

  if (icon !== null && icon.nodeName === 'I') {
    newButton.appendChild(icon);
  }
  return newButton;
}
