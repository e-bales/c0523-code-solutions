export function countValues(stack) {
  let count = 0;
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}

export function maxValue(stack) {
  let max = Number.NEGATIVE_INFINITY;
  let nextNum = stack.pop();
  while (nextNum !== undefined) {
    if (nextNum > max) {
      max = nextNum;
    }
    nextNum = stack.pop();
  }
  return max;
}
