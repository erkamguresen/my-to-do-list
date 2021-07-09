export function openTheListHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  let target = event.target;
  //TODO: handle
  while (target.nodeName !== 'LI') {
    target = target.parentNode;
  }

  const listId = target.dataset.id;

  console.log(listIndex);
}
