export function createCheckIcon() {
  const newCheckIcon = document.createElement('i');
  newCheckIcon.className =
    'far fa-square align-middle mr-3 check btn-outline-success';
  newCheckIcon.style.fontSize = '2rem';

  return newCheckIcon;
}
