/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    let n = Math.floor(num / 3);
    let arr = [];
    if(n + (n - 1) +  (n + 1) === num)arr.push(n - 1, n, n + 1)
    return arr
};