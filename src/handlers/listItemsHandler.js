export function listItemsHandler(event) {
  event.preventDefault();
  console.log('listItemsHandler');
  console.log(event.type);
  if (event.target.classList.contains('delete')) {
    console.log('delete');
    console.log(event.currentTarget);
  }
  if (event.target.classList.contains('edit')) {
    console.log('edit');
    console.log(event.currentTarget);
  }
  if (event.target.classList.contains('check')) {
    console.log('check');
    console.log(event.currentTarget);
  }
}

export function addItemHandler(event) {
  event.preventDefault();
  console.log('addItemHandler');
  console.log(event.type);
}

export function filterItemsHandler(event) {
  event.preventDefault();
  console.log('filterItemsHandler');
  console.log(event.type);
  console.log(event.target.value);
}
