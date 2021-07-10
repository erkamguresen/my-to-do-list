export function filterItems(event) {
  //get the search text and convert to lowercase
  let searchText = event.target.value.toLocaleLowerCase();

  const itemList = document.getElementById('list-container');

  const items = itemList.getElementsByTagName('li');

  //convert to an array
  Array.from(items).forEach((item) => {
    const itemName = item.querySelector('span').textContent;

    //If the searched text is not in the array it will return -1
    if (itemName.toLocaleLowerCase().indexOf(searchText) === -1) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
}

// export function resetFilter() {
//   const itemList = document.getElementById('item-list');

//   const items = itemList.getElementsByTagName('li');

//   //convert to an array
//   Array.from(items).forEach((item) => {
//     item.style.display = 'block';
//   });
// }
