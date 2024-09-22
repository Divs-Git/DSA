// https://leetcode.com/problems/first-unique-character-in-a-string/description/
function firstUniqChar(s: string): number {
  const map: Record<string, number> = {};

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
