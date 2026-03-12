/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let str = String(x);
    let num = 0;
    for(let i = 0; i < str.length; i++){
        num += Number(str[i])
    }
    return x % num === 0 ? num : -1
};