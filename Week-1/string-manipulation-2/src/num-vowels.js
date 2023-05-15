/* exported numVowels */
function numVowels(string) {
  const vowelRegex = /[aeiouAEIOU]/i;
  const allChars = string.split('');
  const result = allChars.filter((char) => vowelRegex.test(char));
  return result.length;
}
