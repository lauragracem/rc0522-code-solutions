/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let prev = queue.dequeue();
  if (prev === undefined) {
    return;
  }

  // peek at next
  let next = queue.peek();
  while (next !== undefined) {
    if (prev > next) {
      queue.enqueue(prev);
      prev = next;
      queue.dequeue();
      next = queue.peek();
    } else {
      queue.dequeue();
      queue.enqueue(next);
      return prev;
    }
  }

  return prev;
}
