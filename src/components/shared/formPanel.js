import { createDivElement } from './divElement.js';

export function createFormPanel() {
  const newDiv = createDivElement('mx-auto my-3');

  //create form element
  const newForm = document.createElement('form');
  newForm.className = 'form-inline mb-3';
  newForm.id = 'addForm';

  //create input element for text field
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.className = 'form-control mr-4';
  textInput.id = 'addItem';
  textInput.placeholder = 'Search or Add A New List...';
  textInput.size = 25;

  newForm.appendChild(textInput);

  //create input element for submit button
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-primary';
  submitButton.value = 'Add New List';

  newForm.appendChild(submitButton);

  newDiv.appendChild(newForm);

  return newDiv;
}
