/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let num = -Infinity;
    for(let i = 0; i < s.length; i++){
      if(lower.includes(s[i])){
        let index = lower.findIndex(x => x == s[i]);
        if(s.includes(upper[index])){
          if(num < index){
            num = index;
          }
        }
      }
    }
    return num < 0 ? "" : upper[num];
};