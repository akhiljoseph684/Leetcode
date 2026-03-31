/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let num = 0;
    let arr = []
    for(let i = 0; i < word.length; i++){
      if(lower.includes(word[i])){
        let index = lower.findIndex(x => x == word[i]);
        if(word.includes(upper[index])){
          if(!arr.includes(upper[index]))num++;
          arr.push(upper[index])
        }
      }
    }
    return num;
};