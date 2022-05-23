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

/*
Define a function and name it filterOutNulls that takes one parameter named values.
Assigna an empty array to a new variable named newValue.
Write a for loop: set the initalization to 0, set the condition to i is less than
 the length of values, set the counter to increment.
Write an 'if' statement--value is not null.
Push value into newValue.
Return newValue.
*/
