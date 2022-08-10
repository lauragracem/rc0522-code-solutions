/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let value = queue.dequeue();
  if (value === undefined) {
    return;
  }

  for (let i = 0; i < index; i++) {
    queue.enqueue(value);
    value = queue.dequeue();
  }
  return value;
}
