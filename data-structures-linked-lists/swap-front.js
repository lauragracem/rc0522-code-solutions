/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = list.next;
  const second = first.next;
  first.next = list;
  list.next = second;
  return first;
}
