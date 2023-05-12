/* exported intersection */
function intersection(first, second) {
  return first.filter((item) => second.includes(item));
}
