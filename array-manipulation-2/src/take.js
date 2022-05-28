/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    var index = array[i];
    if (index !== undefined) {
      newArray.push(index);
    }
  }
  return newArray;
}
