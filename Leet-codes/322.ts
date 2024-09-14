// https://leetcode.com/problems/coin-change/

// 1. Solution with TLE
function coinChange(coins: number[], amount: number): number {
  const result: number = recursion(coins, amount, 0);
  return result === Infinity ? -1 : result;
}

function recursion(coins: number[], amount: number, count: number): number {
  if (amount === 0) return count;
  if (amount < 0) return Infinity;

  let result: number = Infinity;

  for (let i = 0; i < coins.length; i++) {
    result = Math.min(result, recursion(coins, amount - coins[i], count + 1));
  }
  return result;
}
