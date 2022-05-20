/* exported initial */
/*
Define a new function named initial that takes one parameter named array. Completed
Assign empty array to a new variable. Completed
Write a for loop and set the condition to length of array minus 1. Completed
Access the array and assign it to a new variable. Completed
Push the result of that variable into the initial variable. Completed
Return initial variable. Completed
*/

function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    var arr1 = array[i];
    arr.push(arr1);
  }
  return arr;
}
