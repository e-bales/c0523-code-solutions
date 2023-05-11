/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  // debugger;
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  const stringArray = string.split('');
  stringArray[firstIndex] = secondChar;
  stringArray[secondIndex] = firstChar;
  return stringArray.join('');
}
