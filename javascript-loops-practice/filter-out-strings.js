/* exported filterOutStrings */
function filterOutStrings(values) {
  return values.filter((item) => typeof item !== 'string');
}
