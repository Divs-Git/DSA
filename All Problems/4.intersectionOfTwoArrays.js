var intersection = function (nums1, nums2) {
  const freqMap1 = {};
  const freqMap2 = {};
  let ans = [];

  for (const num of nums1) {
    if (freqMap1.hasOwnProperty(num)) {
      freqMap1[num]++;
    } else {
      freqMap1[num] = 1;
    }
  }

  // console.log(freqMap1)

  for (const num of nums2) {
    if (freqMap1.hasOwnProperty(num) && freqMap2.hasOwnProperty(num)) {
      freqMap2[num]++;
    } else if (freqMap1.hasOwnProperty(num)) {
      freqMap2[num] = 1;
    }
  }

  //   for (const num of Object.keys(freqMap2)) {
  //     ans.push(num);
  //   }
  return Object.keys(freqMap2);
};
