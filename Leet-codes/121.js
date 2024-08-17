// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// O(n^2) -> TLE
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max < 0 ? 0 : max;
};

// O(n)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currMin = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Can I Sell
    if (prices[i] > currMin) {
      maxProfit = Math.max(maxProfit, prices[i] - currMin);
    }
    // Can i Buy
    if (prices[i] < currMin) {
      currMin = prices[i];
    }
  }
  return maxProfit;
};
