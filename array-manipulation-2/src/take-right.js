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
