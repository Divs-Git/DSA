// https://leetcode.com/problems/first-missing-positive/description/https://leetcode.com/problems/first-missing-positive/description/
function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (num <= nums.length) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
