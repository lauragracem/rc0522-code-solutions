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

/*
Define a new function and name it includesSeven that takes one parameter named array.
Assign the value of false to a new variable named resutl.
Write a for loop--set the initialization to 0, set the condition i is less than the
 length of the array, set the counter to increment.
Access the index of array and assign it to a new variable named value.
Write and 'if' statement--value is strictly equal to 7.
Assign the value of true to result.
Return result.
*/
