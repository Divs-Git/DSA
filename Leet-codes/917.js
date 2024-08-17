// https://leetcode.com/problems/reverse-only-letters/description/

/**
 * @param {string} s
 * @return {string}
 */
var isAlpha = function (ch) {
  return /^[A-Z]$/i.test(ch);
};
var reverseOnlyLetters = function (s) {
  let i = 0;
  let j = s.length - 1;
  let arr = s.split("");
  while (i <= j) {
    if (!isAlpha(s[i])) {
      i++;
    } else if (!isAlpha(s[j])) {
      j--;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr.join("");
};
