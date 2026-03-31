/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i = 1; i < word.length; i++){
      if(lower.includes(word[0])){
        if(!lower.includes(word[i])){
          return false;
        }
      }else{
        if(lower.includes(word[1])){
          if(!lower.includes(word[i])){
            return false;
          }
        }else{
          if(!upper.includes(word[i])){
            return false;
          }
        }
      }
    }
    return true;
};