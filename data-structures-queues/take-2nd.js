/* exported take2nd */

function take2nd(queue) {
  const remove = queue.dequeue();
  if (remove === undefined) {
    return;
  }
  if (remove !== undefined) {
    return remove;
  }

}
