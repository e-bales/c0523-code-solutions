/* exported getValues */
function getValues(object) {
  const array = [];
  for (const keys in object) {
    array.push(object[keys]);
  }
  return array;
}
