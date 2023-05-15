/* exported invert */
function invert(source) {
  const myObject = {};
  for (const keys in source) {
    const newKey = source[keys];
    const newValue = keys;
    myObject[newKey] = newValue;
  }
  return myObject;
}
