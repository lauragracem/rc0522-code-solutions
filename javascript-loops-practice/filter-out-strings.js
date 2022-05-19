/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValue = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (typeof value !== 'string') {
      newValue.push(value);
    }
  }
  return newValue;
}
