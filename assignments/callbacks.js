// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function callbackFunction(x) {
  console.log(x);
}


  // getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return callbackFunction(arr.length);
}

getLength(items, callbackFunction);


  // last passes the last item of the array into the callback.
function last(arr, cb) {
  let lastItem = arr[arr.length-1]
  return callbackFunction(lastItem)
}

last(items, callbackFunction);


  // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  let summed = x+y;
  return callbackFunction(summed);
}

sumNums(3, 7, callbackFunction);


  // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  let multiplied = x*y;
  return callbackFunction(multiplied);
}

multiplyNums(4, 2, callbackFunction);


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(str, arr, cb) {
  let containedItem;
  if (arr.includes(str)) {
    containedItem = true;
  }
  else {
    containedItem = false;
  }
  return callbackFunction(containedItem)
}

contains('Road', items, callbackFunction);
contains('Pencil', items, callbackFunction);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
