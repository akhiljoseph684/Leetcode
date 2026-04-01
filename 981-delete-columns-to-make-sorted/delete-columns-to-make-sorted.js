/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let count = 0;
    for(let i = 0; i < strs[0].length; i++){
      let num = 0;
      for(let j = 0; j < strs.length; j++){
        let n = lower.findIndex(x => x === strs[j][i])
        if(n < num){
          count++;
          break;
        }else{
          num = n;
        }
      }
    }
    return count;
};