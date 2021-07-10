/**
 * This function creates a new check icon with the given properties.
 *
 * @param {boolean} isChecked - if the checked icon is checked or not
 * @returns {object} - a new icon
 */
export function createCheckIcon(isChecked = false) {
  const newCheckIcon = document.createElement('i');

  if (isChecked) {
    newCheckIcon.className =
      'far fa-check-square align-middle mr-3 check btn-outline-success';
  } else {
    newCheckIcon.className =
      'far fa-square align-middle mr-3 check btn-outline-success';
  }
  newCheckIcon.style.fontSize = '2rem';

  return newCheckIcon;
}
