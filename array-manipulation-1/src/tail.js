/* exported tail */
/*
Define a function named tail that takes a parameter and name it array. Completed
Assign an empty array to a new variable. Completed
Access the array.
Return index 1 until the end of the array.
*/
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    var arr1 = array[i];
    arr.push(arr1);
  }
  return arr;
}

/*
Define a function name tail that takes a parameter and name it array. Completed
Assign an empty array to a new variable. Completed
Write a for loop, set initialization variable to 1. Completed
Access the array and assign it to a new variable. Completed
Push the result of the new variable to the initial variable. Completed
Return initial variable. Completed.
 */
