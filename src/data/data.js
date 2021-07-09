//TODO drag drop
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list

import { getMyToDoListDataSet } from '../IO/IO-LocalStorage.js';

/**
 * This is for all ToDo lists. It gets from local storage
 * named MyToDoListDataSet
 */
const toDoListData = {
  toDoLists: [],
  currentToDoListIndex: -1,
};

const toDoListExampleData = {
  toDoLists: [
    // list 1
    {
      listId: 1625764536952,
      toDos: [
        // list item 1
        {
          itemId: 1625764684884,
          itemName: 'First thing to do',
          isChecked: false,
        },
        {
          itemId: 1625764684894,
          itemName: 'Second thing to do',
          isChecked: true,
        },
        {
          itemId: 1625764684895,
          itemName: 'Third thing to do',
          isChecked: false,
        },
      ],
    },
    // list 2
    {
      listId: 1625764551531,
      toDos: [
        {
          itemId: 1625764684184,
          itemName: 'List Item 1',
          isChecked: true,
        },
        {
          itemId: 1625764684294,
          itemName: 'List Item 2',
          isChecked: true,
        },
        {
          itemId: 1625764684395,
          itemName: 'List Item 3',
          isChecked: false,
        },
      ],
    },

    {
      listId: 1625764551533,
      toDos: [
        {
          itemId: 1625764684584,
          itemName: 'Not Checked Item 1',
          isChecked: false,
        },
        {
          itemId: 1625764684694,
          itemName: 'Not Checked Item 2',
          isChecked: false,
        },
        {
          itemId: 1625764684795,
          itemName: 'Not Checked Item 3',
          isChecked: false,
        },
      ],
    },
  ],
};

export { toDoListData as state, toDoListExampleData as exampleData };
