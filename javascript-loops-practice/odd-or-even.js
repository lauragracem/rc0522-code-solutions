/* exported oddOrEven */
function oddOrEven(numbers) {
  var newValue = [];
  for (var i = 0; i < numbers.length; i++) {
    var value = numbers[i];
    if (value % 2 === 0) {
      newValue.push('even');
    }
    if (value % 2 !== 0) {
      newValue.push('odd');
    }
  }
  return newValue;
}

/*
Define a function and name it oddOrEven that takes one parameter named numbers.
Assign an empty array to a new variable named newValue.
Write a for loop--set the initialization to 0, set the condition to i is less than
 the length of numbers, set the counter to increment.
Access the index in numbers and assign it to a new variable named value.
Write an 'if' statement.
Push the string even into newValue if there is no remainder.
Write an 'if' statement.
Push the string odd into newValue if there is a remainder.
Return newValue.
*/
