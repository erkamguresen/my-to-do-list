//Name of the main save in the local storage system
const localStorageMainSave = 'My List DataBase';

// Name format for each data set in the local storage system:
// `${listName} Data`

export function saveDataSet(noteList) {
  // Save data object to local storage
  let dataJSON = JSON.stringify(noteList);
  localStorage.setItem(`${noteList.listName} Data`, dataJSON);

  updateDataSetList(`${noteList.listName} Data`);
}

export function getDataSet(listName) {
  return JSON.parse(localStorage.getItem(listName));
}

export function getMyToDoListDataSet() {
  const dataList = [];

  if (localStorage.getItem(localStorageMainSave) !== null) {
    //read data list from localStorage
    const dataSetList = JSON.parse(localStorage.getItem(localStorageMainSave));

    //check JSON add each dataSet to the list
    dataSetList.forEach((dataSetName) => {
      dataList.push(getDataSet(dataSetName));
    });
  }

  return dataList;
}
/**
 * The main function to set and update the data set list in the local storage
 *
 * @param {string} dataSetName name of the dataSet
 * to add the main dataset list
 */
function updateDataSetList(dataSetName) {
  if (localStorage.getItem(localStorageMainSave) === null) {
    localStorage.setItem(localStorageMainSave, JSON.stringify([]));
  }

  const dataSetList = JSON.parse(localStorage.getItem(localStorageMainSave));

  if (!dataSetList.includes(dataSetName)) {
    dataSetList.push(dataSetName);
    localStorage.setItem(localStorageMainSave, JSON.stringify(dataSetList));
  }

  //update the memorizeDataBase
  memorizeDataBase.dataSetList = dataSetList;
}
