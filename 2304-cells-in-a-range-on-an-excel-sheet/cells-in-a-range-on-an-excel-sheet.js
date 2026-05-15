/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let index = alpha.findIndex(x => x === s[0]);
    let lastIndex =  alpha.findIndex(x => x === s[3]);
    let arr = [];
    for(let i = index; i <= lastIndex; i++){
      for(let j = Number(s[1]); j <= Number(s[4]); j++){
        arr.push(alpha[i] + j)
      }
    }
    return arr;
};