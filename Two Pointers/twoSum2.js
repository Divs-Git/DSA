// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Brute force
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
};

// Optimized
var comp = function (x, y) {
  return x[0] - y[0];
};

var twoSum = function (nums, target) {
  // Modify the existing array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i];
  }
  // Sorting the array based on element
  nums.sort(comp);

  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start][0] + nums[end][0] === target) {
      return [nums[start][1], nums[end][1]];
    } else if (nums[start][0] + nums[end][0] > target) {
      end--;
    } else {
      start++;
    }
  }
};
