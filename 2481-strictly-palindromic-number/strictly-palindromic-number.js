/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i = 2; i < n - 1; i++){
      let num = n.toString(i)
      if(num !== num.split().reverse()){
        return false
      }
    }
    return true
};