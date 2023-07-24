export function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}

export function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstNum = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstNum;
  }
  const secondNum = queue.dequeue();
  const bigger = firstNum > secondNum ? firstNum : secondNum;
  const smaller = firstNum > secondNum ? secondNum : firstNum;
  queue.enqueue(bigger);
  return smaller;
}

export function takeNextSmallest(numberQueue) {
  if (numberQueue.peek() === undefined) {
    return;
  }
  let top = numberQueue.dequeue();
  if (numberQueue.peek() === undefined) {
    return top;
  }
  while (top > numberQueue.peek()) {
    numberQueue.enqueue(top);
    top = numberQueue.dequeue();
  }
  return top;
}
