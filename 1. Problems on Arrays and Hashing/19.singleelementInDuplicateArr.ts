// https://leetcode.com/problems/single-element-in-a-sorted-array/description/
function singleNonDuplicate(nums: number[]): number {
  let n = nums.length;
  let lo = 0;
  let hi = n - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    // corner cases
    if (nums[mid] != nums[mid + 1] && mid - 1 < 0) {
      return nums[mid];
    }
    if (nums[mid] != nums[mid - 1] && mid + 1 >= n) {
      return nums[mid];
    }

    // main Algo
    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid];
    } else if (nums[mid] == nums[mid - 1]) {
      if (mid % 2 == 0) {
        hi = mid - 2;
      } else {
        lo = mid + 1;
      }
    } else if (nums[mid] == nums[mid + 1]) {
      if (mid % 2 == 0) {
        lo = mid + 2;
      } else {
        hi = mid - 1;
      }
    }
  }
  return -1;
}
