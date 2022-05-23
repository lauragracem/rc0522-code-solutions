/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

/*
Define a function and name it sumAll that takes one parameter numbers.
Assign 0 to a new variable named sum.
Write a for loop--set the intialization to 0, set the condition to i is less than
 the length of numbers, set the counter to increment.
Access the index of numbers and add it to sum. Set the result of the expression to sum.
Return sum.
*/
