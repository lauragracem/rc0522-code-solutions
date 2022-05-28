/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    var index = array[i];
    if (value === index) {
      return true;
    }
  }
  return false;
}
