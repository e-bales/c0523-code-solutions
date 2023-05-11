/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const array = [];
  for (const word of words) {
    array.push(word + suffix);
  }
  return array;
}
