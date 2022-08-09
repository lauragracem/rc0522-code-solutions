/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const popTop = stack.pop();
  if (popTop === undefined) {
    return;
  }

  const secondTop = stack.peek();
  stack.push(popTop);

  return secondTop;
}
