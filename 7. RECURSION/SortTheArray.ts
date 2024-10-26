function insert(nums: number[], temp: number) {
  if (nums.length === 0 || nums[nums.length - 1] <= temp) {
    nums.push(temp);
    return;
  }

  let val = nums.pop();
  insert(nums, temp);
  nums.push(val);
}
function sort(nums: number[]) {
  if (nums.length === 1) {
    return;
  }
  let temp = nums.pop();
  sort(nums);
  insert(nums, temp);
}

function sortArray(nums: number[]): number[] {
  sort(nums);
  return nums;
}
