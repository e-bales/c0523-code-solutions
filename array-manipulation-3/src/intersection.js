/* exported intersection */
function intersection(first, second) {
  // const newArray = first.filter(item => second.includes(item));
  return first.filter((item) => second.includes(item));
}
