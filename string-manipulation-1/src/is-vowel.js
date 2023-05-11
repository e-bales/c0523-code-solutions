/* exported isVowel */
function isVowel(character) {
  const vowelRegex = /[aeiou]/i;
  return vowelRegex.test(character.toLowerCase());
}
