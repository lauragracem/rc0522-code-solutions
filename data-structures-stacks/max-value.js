/* exported maxValue */

function maxValue(stack) {
  let maxValue = -Infinity;
  let popped = stack.pop();
  while (popped !== undefined) {
    maxValue = Math.max(maxValue, popped);
    popped = stack.pop();
  }
  return maxValue;
}
