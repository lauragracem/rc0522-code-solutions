/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const popTop = stack.pop();
  if (popTop === undefined) {
    return;
  }

  stack.push(value);
  stack.push(popTop);

  return stack;
}
