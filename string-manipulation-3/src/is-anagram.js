/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const firstDict = {};
  const secondDict = {};
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === ' ') continue;
    if (firstDict[firstString[i]]) {
      firstDict[firstString[i]]++;
    } else {
      firstDict[firstString[i]] = 1;
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] === ' ') continue;
    if (secondDict[secondString[i]]) {
      secondDict[secondString[i]]++;
    } else {
      secondDict[secondString[i]] = 1;
    }
  }
  for (const keys in firstDict) {
    if (!(keys in secondDict) || firstDict[keys] !== secondDict[keys]) {
      return false;
    }
  }
  return true;
}
