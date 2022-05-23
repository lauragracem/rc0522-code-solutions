/* exported countdown */
function countdown(number) {
  var array = [];
  while (number >= 0) {
    array.push(number);
    number--;
  }
  return array;
}

/*
Define a function and name it countdown that takes one parameter named number.
Assign an empty array to a new variable named array.
Write a while loop and set the condition to number is greater than or equal to 0.
Push number in array.
Number decrements.
Return array.
*/
