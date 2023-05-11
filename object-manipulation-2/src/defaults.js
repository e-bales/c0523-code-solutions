/* exported defaults */
function defaults(target, source) {
  const targetKeys = Object.keys(target);
  const sourceKeys = Object.keys(source);
  for (const keys of sourceKeys) {
    if (!targetKeys.includes(keys)) {
      target[keys] = source[keys];
    }
  }
}
