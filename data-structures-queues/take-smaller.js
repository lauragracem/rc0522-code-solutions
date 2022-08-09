/* exported takeSmaller */

function takeSmaller(queue) {
  const get = queue.dequeue();
  if (get === undefined) {
    return get;
  }
  const get2 = queue.dequeue();
  if (get2 === undefined) {
    return get;
  }

  if (get > get2) {
    queue.enqueue(get);
    return get2;
  } else {
    queue.enqueue(get2);
    return get;
  }
}
// Get first item from queue
// If first item is undefined, return
// Get second item from queue
// If second item is undefined, return first item

// If first item is greater than second item, enqueue first item, return second item
// Else enqueue second item and return first item
