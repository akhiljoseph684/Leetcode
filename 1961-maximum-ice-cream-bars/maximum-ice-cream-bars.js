/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;
    for(let i = 0; i < costs.length; i++){
      sum += costs[i]
      if(sum > coins)return count
      count++;
    }
    return count;
};