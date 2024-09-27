// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
function getUpperBound(nums: number[], target: number): number {
  let ans = nums.length;
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] <= target) {
      lo = mid + 1;
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }

  return ans;
}

function getLowerBound(nums: number[], target: number): number {
  let ans = nums.length;
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }

  return ans;
}
function searchRange(nums: number[], target: number): number[] {
  let ub = getUpperBound(nums, target);
  let lb = getLowerBound(nums, target);

  if (lb >= nums.length || nums[lb] != target) {
    return [-1, -1];
  }

  return [lb, ub - 1];
}
