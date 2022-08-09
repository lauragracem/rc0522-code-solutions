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

// pop the "top" and save it into a variable
// check if top is undefined, if it is undefined return
// Use peek to get the second item from the stack, save in variable
// Push the top back on
// Return the variable that holds the second item
