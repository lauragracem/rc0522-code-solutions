/* exported getValues */
// eslint-disable-next-line no-unused-vars
function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}
