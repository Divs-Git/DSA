// https://leetcode.com/problems/find-peak-element/description/
function findPeakElement(nums: number[]): number {
  let n = nums.length;
  nums[-1] = -Infinity;
  nums[n] = -Infinity;

  let lo = 0;
  let hi = n - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    } else if (nums[mid] < nums[mid + 1]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return -1;
}
