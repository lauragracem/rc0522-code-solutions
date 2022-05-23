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

/*
Define a function and name it findIndex that takes two parameters named array and value.
Write a for loop--set the initalization to 0, the condition to i is less than
 the length of array, set the counter to increment.
Write and 'if' statement--newValue is strictly equal to value.
Return i.
Return negative 1.
*/
