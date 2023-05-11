/* exported includes */
function includes(array, value) {
  return Boolean(array.filter((item) => item === value).length);
}
