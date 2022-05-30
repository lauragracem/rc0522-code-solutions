/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    var index = array[i];
    if (index !== undefined) {
      newArray.push(index);
    }
  }
  return newArray;
}
