/* exported postpone */

function postpone(queue) {
  const move = queue.dequeue();
  if (move === undefined) {
    return;
  }
  const putBack = queue.enqueue(move);
  return putBack;
}
