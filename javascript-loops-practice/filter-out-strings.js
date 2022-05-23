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

/*
Define a function and name it filterOutStrings that takes one parameter named values.
Assign an empty array to a new variable named newValue.
Write a for loop; set the intialization to i equals 0, set the condition to i is less than
 the length of values, set the counter to increment.
Write an 'if' statment--typeof value is not equal to string.
Push value into newValue.
Return newValue.
*/
