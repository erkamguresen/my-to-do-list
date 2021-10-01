//TODO drag drop
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list

/**
 * This is for all ToDo lists. It gets from local storage
 * named MyToDoListDataSet
 */
const toDoListData = {
  toDoLists: [],
  currentToDoListIndex: -1,
};

const exampleListData = [
  [
    // list 1
    {
      listName: 'Shopping List (example)',
      listId: 1625764536952,
      toDos: [
        // list item 1
        {
          itemId: 1625764684884,
          itemName: 'Milk',
          isChecked: false,
        },
        {
          itemId: 1625764684894,
          itemName: 'Eggs x12',
          isChecked: true,
        },
        {
          itemId: 1625764684895,
          itemName: 'Appels',
          isChecked: false,
        },
      ],
    },
    // list 2
    {
      listName: 'Daily List (example)',
      listId: 1625764551531,
      toDos: [
        {
          itemId: 1625764684184,
          itemName: 'Watch the online tutorial',
          isChecked: true,
        },
        {
          itemId: 1625764684294,
          itemName: 'Finish the project',
          isChecked: true,
        },
        {
          itemId: 1625764684395,
          itemName: 'New episode of my favorite series',
          isChecked: false,
        },
        {
          itemId: 1625764684396,
          itemName: 'New episode of my favorite series',
          isChecked: false,
        },
      ],
    },

    {
      listName: 'An new empty List (example)',
      listId: 1625764551533,
      toDos: [],
    },
  ],
];

const toDoListExampleData = {
  toDoLists: exampleListData,
};

export { toDoListData as state, toDoListExampleData as exampleData };
