/* exported zip */
function zip(first, second) {
  const minLength = Math.min(first.length, second.length);
  const newArray = [];
  for (let i = 0; i < minLength; i++) {
    const subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    newArray.push(subArray);
  }
  return newArray;
}
