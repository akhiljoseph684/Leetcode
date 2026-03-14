/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    for(let i = 0; i < prices.length; i++){
      for(let j = i + 1; j < prices.length; j++){
        if(money >= prices[i] + prices[j]){
          return money - (prices[i] + prices[j])
        }
      }
    }
    return money
};