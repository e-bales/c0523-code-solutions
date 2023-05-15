/* exported union */
function union(first, second) {
  return Array.from(new Set(first.concat(second)));
}
