/* exported toObject */
function toObject(keyValuePair) {
  const myObject = {};
  myObject[keyValuePair[0]] = keyValuePair[1];
  return myObject;
}
