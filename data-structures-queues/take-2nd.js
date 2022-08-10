/* exported take2nd */

function take2nd(queue) {
  const get = queue.dequeue();
  if (get === undefined) {
    return get;
  }
  const get2 = queue.peek();
  if (get2 === undefined) {
    return get;
  }
  queue.dequeue(get2);
  queue.enqueue(get);

  return get2;

}
