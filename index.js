const standardizeInput = (collection) => {
    return collection instanceof Array
      ? collection.slice()
      : Object.values(collection);
  };
  
  const myEach = (collection, callback) => {
    const newCollection = standardizeInput(collection);
  
    for (let index = 0; index < newCollection.length; index++) {
      callback(newCollection[index]);
    }
  
    return collection;
  };
  
  const myMap = (collection, callback) => {
    const newCollection = standardizeInput(collection);
    let newArray = new Array();
  
    for (let index = 0; index < newCollection.length; index++) {
      newArray.push(callback(newCollection[index]));
    }
  
    return newArray;
  };
  
  const myReduce = (collection, callback, acc) => {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  };
  const myFind = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
    for (let index = 0; index < newCollection.length; index++) {
      if (predicate(newCollection[index])) return newCollection[index];
    }
    return undefined;
  };
  const myFilter = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
    const newArr = new Array();
    for (let index = 0; index < newCollection.length; index++) {
      if (predicate(newCollection[index])) newArr.push(newCollection[index]);
    }
    return newArr;
  };
  const mySize = (collection) => {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  };
  
  //arrays
  
  const myFirst = (arr, stop = false) => {
    return stop ? arr.slice(0, stop) : arr[0];
  };
  
  const myLast = (arr, start = false) => {
    return start
      ? arr.slice(arr.length - start, arr.length)
      : arr[arr.length - 1];
  };
  
  const mySortBy = (arr, callback) => {
    const newArr = [...arr];
    return newArr.sort(function (a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  };
  // Object Functions
  
  const myKeys = (obj) => {
    const keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  };
  
  const myValues = (obj) => {
    const values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    return values;
  };