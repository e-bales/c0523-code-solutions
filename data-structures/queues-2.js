export function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
}

export function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  for (let i = 0; i < index; i++) {
    postpone(queue);
  }
  return queue.dequeue();
}
