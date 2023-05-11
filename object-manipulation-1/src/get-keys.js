/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const keys in object) {
    array.push(keys);
  }
  return array;
}
