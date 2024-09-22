// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: Record<string, number> = {};

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (map.hasOwnProperty(t[i])) {
      map[t[i]]--;
      if (map[t[i]] == 0) {
        delete map[t[i]];
      }
    } else {
      return false;
    }
  }

  return !Object.keys(map).length;
}
