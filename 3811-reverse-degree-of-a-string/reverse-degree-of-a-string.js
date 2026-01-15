/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let arr = s.split('');
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    alpha = alpha.split('').reverse();
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += (i + 1) * (alpha.findIndex(x => x === arr[i]) + 1)
    }
    return sum
};