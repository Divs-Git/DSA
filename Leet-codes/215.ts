// TLE -> using bubble sort
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums[n - k];
}
