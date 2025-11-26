/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n = String(n)
    let value = 0;
    for(let i = 0; i < n.length; i++){
        if(i % 2 === 0){
            value += Number(n[i])
        }else{
            value -= Number(n[i])
        }
    }
    return value
};