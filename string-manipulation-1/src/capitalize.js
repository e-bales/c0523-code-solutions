/* exported capitalize */
function capitalize(word) {
  const newString = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return newString;
}
