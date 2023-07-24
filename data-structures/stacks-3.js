export function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  if (stack.peek() !== undefined) {
    const secondNum = stack.peek();
    stack.push(top);
    return secondNum;
  }
  stack.push(top);
}

export function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  stack.push(value);
  stack.push(top);
}
