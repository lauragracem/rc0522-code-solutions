/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    var index = array[i];
    newArray.push(index);
  }
  return newArray;
}
