/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) return array;
  const totalArray = [[]];
  let i = 0;
  let positionCount = 0;
  while (i < array.length) {
    if (totalArray[positionCount].length === size) {
      totalArray.push([]);
      positionCount++;
    } else {
      totalArray[positionCount].push(array[i]);
      i++;
    }
  }

  return totalArray;
}
