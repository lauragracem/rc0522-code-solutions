/* exported reverse */
/*
Define a function named reverse that takes a parameter named array. Completed
Assign and empty array to a new variable. Completed
Write a for loop and set the counter to decrement. Completed
Access the array and assign it to a new variable. Completed
Push the result from the new variable into the initial variable. Completed
Return intial variable. Completed
*/

function reverse(array) {
  var arr = [];
  // eslint-disable-next-line for-direction
  for (var i = array.length - 1; i >= 0; i--) {
    var arr1 = array[i];
    arr.push(arr1);
  }
  return arr;
}

/*
Define a function named reverse that takes a parameter named array. Completed
Assign and empty array to a new variable. Completed
Write a for loop and set the initialization to the length of the array minus 1. Completed
Set the condition, in the for loop, to i is greater than or equal to 0. Completed
Set the counter, in the for loop, to decrement. Completed
Access the array and assign it to a new variable. Completed
Push the result from the new variable into the initial variable. Completed
Return intial variable. Completed
*/
