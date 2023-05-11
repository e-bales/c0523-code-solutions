/* exported reverseWord */
function reverseWord(word) {
  const newArray = [];
  for (let i = word.length - 1; i >= 0; i--) {
    newArray.push(word[i]);
  }
  return newArray.join('');
}
