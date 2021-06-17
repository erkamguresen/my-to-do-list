//TODO: sort items by checked or unchecked
export function sortList() {
  const itemList = document.getElementById('item-list');

  const items = itemList.getElementsByTagName('li');

  //convert to an array
  const liArray = Array.from(items).sort(sortFunctionCheckedFirst);

  //   forEach((item) => {
  //     const itemName = item.querySelector('span').textContent;

  //     //If the searched text is not in the array it will return -1
  //     if (itemName.toLocaleLowerCase().indexOf(searchText) === -1) {
  //       item.style.display = 'none';
  //     } else {
  //       item.style.display = 'block';
  //     }
  //   });

  console.log(liArray);
}

function sortFunctionCheckedFirst(a, b) {
  return (
    a.querySelector('i').classList.contains('fa-square') -
    b.querySelector('i').classList.contains('fa-square')
  );
}
