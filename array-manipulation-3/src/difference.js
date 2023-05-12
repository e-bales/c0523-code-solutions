/* exported difference */
function difference(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) newArray.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) newArray.push(second[i]);
  }
  return newArray;
}
