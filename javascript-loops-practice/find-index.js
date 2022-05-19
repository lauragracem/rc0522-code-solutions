/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var newValue = array[i];
    if (newValue === value) {
      return i;
    }
  }
  return -1;
}
