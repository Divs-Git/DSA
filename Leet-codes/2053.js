// https://leetcode.com/problems/kth-distinct-string-in-an-array/

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const freqMap = {};
  for (const str of arr) {
    if (freqMap[str]) {
      freqMap[str]++;
    } else {
      freqMap[str] = 1;
    }
  }
  let cnt = 1;
  for (const [str, freq] of Object.entries(freqMap)) {
    if (freq === 1) {
      if (cnt == k) {
        return str;
      }
      cnt++;
    }
  }
  return "";
};
