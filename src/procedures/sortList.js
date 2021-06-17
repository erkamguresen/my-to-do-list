export function sortList() {
  const itemList = document.getElementById('item-list');

  const items = itemList.getElementsByTagName('li');

  //convert to an array
  const liArray = Array.from(items).sort(sortFunctionCheckedFirst);

  itemList.innerHTML = [];

  liArray.forEach((element) => {
    itemList.appendChild(element);
  });
}

function sortFunctionCheckedFirst(a, b) {
  return (
    b.querySelector('i').classList.contains('fa-square') -
    a.querySelector('i').classList.contains('fa-square')
  );
}

function sortFunctionUncCeckedFirst(a, b) {
  return (
    a.querySelector('i').classList.contains('fa-square') -
    b.querySelector('i').classList.contains('fa-square')
  );
}
