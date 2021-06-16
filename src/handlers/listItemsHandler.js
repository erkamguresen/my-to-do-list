export function listItemsHandler(event) {
  event.preventDefault();
  console.log('listItemsHandler');
  console.log(event.type);
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
