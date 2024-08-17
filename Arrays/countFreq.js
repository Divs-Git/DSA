function freq(s) {
  let freqMap = {};
  for (const char of s) {
    if (freqMap[char]) {
      freqMap[char]++;
    } else {
      freqMap[char] = 1;
    }
  }

  for (const char in freqMap) {
    console.log(char, freqMap[char]);
  }
}

freq("school");
