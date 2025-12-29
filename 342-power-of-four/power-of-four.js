/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 1)return true
    while(n !== 4){
        if(n < 4 ){
            return false
        }
        n /= 4
    }
    return true
};