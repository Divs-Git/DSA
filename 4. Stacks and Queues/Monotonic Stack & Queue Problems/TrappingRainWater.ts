// https://leetcode.com/problems/trapping-rain-water/description/
function prefixSum(nums: number[]) {
    let max: number[] = Array(nums.length);
    max[0] = nums[0];
    for(let i = 1 ; i < nums.length ; i++) {
        max[i] = Math.max(nums[i],max[i-1]);
    }
    return max;
}

function suffixSum(nums: number[]) {
    let n = nums.length
    let max: number[] = Array(n);
    max[n - 1] = nums[n - 1];
    for(let i = n - 2 ; i >= 0; i--) {
        max[i] = Math.max(nums[i],max[i+1]);
    }
    return max;
}
function trap(height: number[]): number {
    let leftMaxArr: number[] = prefixSum(height);
    let rightMaxArr: number[] = suffixSum(height);
    let totalArea = 0;
    for(let i = 0 ; i < height.length ; i++) {
        totalArea += (Math.min(leftMaxArr[i],rightMaxArr[i]) - height[i])
    }
    return totalArea;
};