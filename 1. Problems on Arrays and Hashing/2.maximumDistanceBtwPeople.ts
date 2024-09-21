// https://leetcode.com/problems/maximize-distance-to-closest-person/description/

function maxDistToClosest(seats: number[]): number {
  let prev = -Infinity;
  let next = -Infinity;
  let ans = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      prev = i;
      next = i;
    } else {
      if (i > next) {
        next = i;
        while (next < seats.length && seats[next] === 0) {
          next++;
        }
        if (next === seats.length) next = Infinity;
      }
    }
    ans = Math.max(ans, Math.min(i - prev, next - i));
  }
  return ans;
}
