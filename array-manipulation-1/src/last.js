/* exported last */
/*
Define a function named last that takes in one parameter named array. Completed
Assign the length of the array to a new variable named access. Completed
Create a new variable and assign the access minus 1. Completed
Access the index of the variable lastElement and assign it to a new variable named result. Completed
Return result. Completed
*/

function last(array) {
  var access = array.length;
  var lastElement = access - 1;
  var result = array[lastElement];
  return result;
}
