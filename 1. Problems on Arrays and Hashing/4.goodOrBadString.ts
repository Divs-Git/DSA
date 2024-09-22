function areOccurrencesEqual(s: string): boolean {
  const map: Record<string, number> = {};
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  const freqs = Object.values(map);
  const freqRef = freqs[0];
  return freqs.every((freq: number) => freq === freqRef);
}
