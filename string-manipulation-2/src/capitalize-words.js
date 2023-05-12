/* exported capitalizeWords */
function capitalizeWords(string) {
  const splitArray = string.split(' ');
  const splitMap = splitArray.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return splitMap.join(' ');
}
