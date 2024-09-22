// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    map[sortedStr] ? map[sortedStr].push(str) : (map[sortedStr] = [str]);
  }

  return Object.values(map);
}
