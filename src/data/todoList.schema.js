export const toDoListDataSchema = {
  title: 'to do list data',
  description: 'the to do list data format for this project',
  type: 'object',

  required: ['toDoLists'],

  properties: {
    currentToDoListIndex: {
      type: 'integer',
      description:
        'the current to do list index, if nothing is selected then -1',
    },
    toDoLists: {
      type: 'array',
      description: 'array of to do list data containing different to do lists',

      items: {
        type: 'object',
        description: 'data belonging to a single to do list',

        required: ['listId', 'toDos', 'listName'],

        properties: {
          listId: {
            type: 'number',
            description: 'an unique number for each to do list',
          },

          listName: {
            type: 'string',
            description: 'the name of the to do list',
          },

          toDos: {
            type: 'array',
            description:
              'array of to do list data containing items of a single to do list',

            items: {
              type: 'object',
              description: 'items on a todo list',

              required: ['itemId', 'itemName', 'isChecked'],

              properties: {
                itemId: {
                  type: 'number',
                  description: 'an unique number for each to do list item ',
                },

                itemName: {
                  type: 'string',
                  description: 'Description of the todo list item.',
                },

                isChecked: {
                  type: 'boolean',
                  description: 'shows the todo list item is done or not.',
                },
              },
            },
          },
        },
      },
    },
  },
};
