/* exported pick */
function pick(source, key) {
  const myObject = {};
  for (const keys of key) {
    if (keys in source && typeof source[keys] !== 'undefined') {
      myObject[keys] = source[keys];
    }
  }
  return myObject;
}
