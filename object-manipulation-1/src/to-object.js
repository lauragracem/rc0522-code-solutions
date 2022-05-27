/* exported toObject */
function toObject(keyValuePair) {
  var empty = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  empty[key] = value;
  return empty;
}
