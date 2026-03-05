/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let str = String(n);
    let revNum = '';
    for(let i = str.length - 1; i >= 0; i--){
      revNum += str[i]
    }
    return Math.abs(revNum - n)
};