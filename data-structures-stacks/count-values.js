/* exported countValues */

function countValues(stack) {
  const values = [];
  let popped = stack.pop();
  while (popped !== undefined) {
    values.push(popped);
    popped = stack.pop();
  }
  for (let i = values.length - 1; i > 0; i--) {
    stack.push(values[i]);
  }
  return values.length;

}
