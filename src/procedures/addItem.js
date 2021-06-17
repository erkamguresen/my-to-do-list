export function createNewLIItem(newItemValue) {
  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';

  const newCheckIcon = document.createElement('i');
  newCheckIcon.className = 'far fa-square align-middle mr-3 check';
  newCheckIcon.style.fontSize = '2rem';

  newLi.appendChild(newCheckIcon);

  newLi.appendChild(document.createTextNode(newItemValue));

  const newButtonDiv = document.createElement('div');
  newButtonDiv.className = 'float-right align-middle';

  const newEditButton = document.createElement('button');
  newEditButton.className =
    'btn btn-sm btn-outline-primary no-border mr-1 edit';

  const newEditIcon = document.createElement('i');
  newEditIcon.className = 'fas fa-pencil-alt edit';
  newEditIcon.style.fontSize = '1.2rem';

  newEditButton.appendChild(newEditIcon);

  newButtonDiv.appendChild(newEditButton);

  const newDeleteButton = document.createElement('button');
  newDeleteButton.className = 'btn btn-outline-danger btn-sm delete no-border';

  const newDeleteIcon = document.createElement('i');
  newDeleteIcon.className = 'fas fa-trash-alt';
  newDeleteButton.appendChild(newDeleteIcon);
  newButtonDiv.appendChild(newDeleteButton);

  newLi.appendChild(newButtonDiv);

  return newLi;
}
