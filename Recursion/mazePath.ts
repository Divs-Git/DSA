function getTotalWays(i: number, j: number, n: number, m: number): number {
  //base case
  if (i == n - 1 && j == m - 1) return 1;
  if (i >= n || j >= m) return 0;

  return getTotalWays(i + 1, j, n, m) + getTotalWays(i, j + 1, n, m);
}

const ans: number = getTotalWays(0, 0, 3, 3);
console.log(ans);
