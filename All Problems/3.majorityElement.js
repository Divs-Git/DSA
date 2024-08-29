var majorityElement = function (nums) {
  let curr = nums[0];
  let curr_freq = 1;
  for (let i = 1; i < nums.length; i++) {
    if (curr_freq === 0) {
      curr = nums[i];
    }
    if (curr === nums[i]) {
      curr_freq++;
    } else {
      curr_freq--;
    }
  }
  return curr;
};
