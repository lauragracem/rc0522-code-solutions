/* exported getIndexes */
function getIndexes(array) {
  var i = 0;
  var index = [];
  for (i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}

/*
Define a function and name it getIndexes that takes one parameter named array.
Assign 0 to a variable i.
Assign an empty array to a new variable named index.
Write a for loop--set the intialization to 0, set the condition i is less than the
 length of array, set the counter to increment.
 Push i into index.
 Return index.
*/
