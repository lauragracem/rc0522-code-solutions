/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let current = queue.dequeue();
  if (current === undefined) {
    return;
  }

  let next = queue.peek();
  while (next !== undefined) {
    if (current > next) {
      queue.enqueue(current);
      current = next;
      queue.dequeue();
      next = queue.peek();
    } else {
      return current;
    }
  }

  return current;
}
