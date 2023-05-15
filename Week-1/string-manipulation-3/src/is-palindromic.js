/* exported isPalindromic */
function isPalindromic(string) {
  if (string.length === 1 || string.length === 0) {
    // base case
    return true;
  } else if (string[0] === ' ') {
    // ignore spaces
    return isPalindromic(string.slice(1));
  } else if (string[string.length - 1] === ' ') {
    // ignore spaces
    return isPalindromic(string.slice(0, -1));
  }
  if (string[0] === string[string.length - 1])
    return isPalindromic(string.slice(1, string.length - 1));
  return false;
}
