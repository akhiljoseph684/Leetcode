/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
    let num = a < b ? a : b;;
    for(let i = 1; i <= num; i++){
        if(a % i === 0 && b % i === 0){
            count++
        }
    }
    return count;
};
commonFactors(12,6)