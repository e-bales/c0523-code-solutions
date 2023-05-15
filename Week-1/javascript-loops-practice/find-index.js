/* exported findIndex */
function findIndex(array, value) {
  // const index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
