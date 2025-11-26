/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x)
    let rev = ''
    for(let i = y.length - 1; i >= 0; i--){
        rev += y[i]
    }
    if(rev == x){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(121))