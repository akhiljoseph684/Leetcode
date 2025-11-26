/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    n = String(n)
    for(let i = 0; i < n.length; i++){
        product *= Number(n[i])
        sum += Number(n[i])
    }
    return product - sum;
};