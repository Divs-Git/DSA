// https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
  let s = 0;
  let e = height.length - 1;
  let ans: number = 0;
  while (s < e) {
    if (height[s] < height[e]) {
      ans = Math.max((e - s) * height[s], ans);
      s++;
    } else {
      ans = Math.max((e - s) * height[e], ans);
      e--;
    }
  }
  return ans;
}
