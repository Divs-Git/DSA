// Extra space
var singleNumber = function (nums) {
  const freqMap = {};
  for (const num of nums) {
    if (freqMap.hasOwnProperty(num)) {
      freqMap[num]++;
    } else {
      freqMap[num] = 1;
    }
  }

  for (const [num, freq] of Object.entries(freqMap)) {
    if (freq === 1) {
      return num;
    }
  }
  return -1;
};

// Best (Use of XOR)
var singleNumber = function (nums) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
};
