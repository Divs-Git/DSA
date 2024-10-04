// https://leetcode.com/problems/sqrtx/description/
function mySqrt(x: number): number {
  if (x === 0) return 0;
  let lo = 1;
  let hi = x - 1;
  let ans = 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid < x / mid) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return ans;
}
