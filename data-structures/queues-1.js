export function getFront(queue) {
  return queue.peek();
}

export function addToBack(queue, value) {
  queue.enqueue(value);
}

export function takeFront(queue) {
  return queue.dequeue();
}

export function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  }
  return false;
}
