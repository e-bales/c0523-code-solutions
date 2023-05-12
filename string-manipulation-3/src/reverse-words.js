/* exported reverseWords */
function reverseWords(string) {
  const bigSplit = string.split(' ');
  for (let i = 0; i < bigSplit.length; i++) {
    bigSplit[i] = bigSplit[i].split('').reverse().join('');
  }
  return bigSplit.join(' ');
}
