/* exported includesSeven */
function includesSeven(array) {
  var result = false;

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value === 7) {
      result = true;
    }
  }

  return result;
}
