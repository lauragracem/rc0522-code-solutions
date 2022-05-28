/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    var index = array[i];
    newArray.push(index);
  }
  return newArray;
}

// count = the number of items from the end of the array
// returned in the order it was inputted.
