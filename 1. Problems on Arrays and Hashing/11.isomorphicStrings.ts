// https://leetcode.com/problems/isomorphic-strings/
function isIsomorphic(s: string, t: string): boolean {
  const mp1: Record<string, string> = {};
  const mp2: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    let char_s = s[i];
    let char_t = t[i];

    if (!mp1[char_s] && !mp2[char_t]) {
      mp1[char_s] = char_t;
      mp2[char_t] = char_s;
    } else if (mp1[char_s] !== char_t && mp2[char_t] !== char_s) {
      return false;
    }
  }

  return true;
}
