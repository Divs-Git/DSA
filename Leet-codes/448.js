// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

// Brute Force -> extra space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const freqMap = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (freqMap[nums[i]] == undefined) {
      freqMap[nums[i]] = 0;
    } else {
      freqMap[nums[i]]++;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!freqMap.hasOwnProperty(i)) {
      res.push(i);
    }
  }
  return res;
};

// Best One
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]);
    let idx = x - 1;
    if (nums[idx] > 0) {
      nums[idx] *= -1;
    }
  }

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
