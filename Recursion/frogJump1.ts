function getMinCost(i: number, n: number, arr: number[]): number {
  // base case
  if (i == n) return 0;
  else if (i == n - 1) {
    return Math.abs(arr[i] - arr[i + 1]) + getMinCost(i + 1, n, arr);
  } else if (i > n) {
    return Infinity;
  }

  // recursion
  const minCostViaIPlus1: number =
    Math.abs(arr[i] - arr[i + 1]) + getMinCost(i + 1, n, arr);
  const minCostViaIPlus2: number =
    Math.abs(arr[i] - arr[i + 2]) + getMinCost(i + 2, n, arr);
  return Math.min(minCostViaIPlus1, minCostViaIPlus2);
}

// console.log(getMinCost(1, 4, [0, 10, 30, 40, 20]));
console.log(getMinCost(1, 2, [0, 10, 10]));
