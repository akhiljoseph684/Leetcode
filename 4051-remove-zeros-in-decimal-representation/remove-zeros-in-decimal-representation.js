/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    n = String(n)
    let num = ''
    for(let i = 0; i < n.length; i++){
        if(n[i] != '0')num += n[i]
    }
    return Number(num)
};