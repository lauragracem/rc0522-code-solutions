/* exported filterOutNulls */
function filterOutNulls(values) {
  var newValue = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (value != null) {
      newValue.push(value);
    }
  }
  return newValue;
}
