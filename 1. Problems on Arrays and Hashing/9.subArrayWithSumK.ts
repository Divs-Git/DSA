// https://leetcode.com/problems/subarray-sum-equals-k/description/
function subarraySum(nums: number[], k: number): number {
  const mp: Record<number, number> = { 0: 1 };
  let prefixSum: number = 0;
  let count: number = 0;

  for (const num of nums) {
    prefixSum += num;
    if (mp.hasOwnProperty(prefixSum - k)) {
      count += mp[prefixSum - k];
    }

    mp[prefixSum] = (mp[prefixSum] || 0) + 1;
  }
  return count;
}
