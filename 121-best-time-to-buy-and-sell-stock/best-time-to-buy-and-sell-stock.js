/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let low = Infinity;
  let profit = -Infinity;
    for(let i = 0; i < prices.length; i++){
      low = low > prices[i] ? prices[i] : low;
      profit = prices[i] - low > profit ? prices[i] - low : profit;
    }
    return profit;
};