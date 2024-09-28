// https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      return num;
    }
    nums[num - 1] = -Math.abs(nums[num - 1]);
  }
  return -1;
}

// Tortoise and rabbit approach
function findDuplicate(nums: number[]): number {
  let t = nums[0];
  let r = nums[0];

  do {
    t = nums[t];
    r = nums[nums[r]];
  } while (t != r);

  t = nums[0];

  while (t != r) {
    t = nums[t];
    r = nums[r];
  }
  return t;
}
