/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    let num = 0;
    while(num < n){
      num += i;
      i++;
    }
    return num - n ? i - 2 : i - 1;
};