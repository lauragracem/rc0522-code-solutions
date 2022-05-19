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
