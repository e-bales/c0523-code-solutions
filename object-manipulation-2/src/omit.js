/* exported omit */
function omit(source, keysArray) {
  const myObject = {};
  for (const keys of Object.keys(source)) {
    if (!keysArray.includes(keys)) {
      myObject[keys] = source[keys];
    }
  }
  return myObject;
}
