/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let count = 0;
    let k = 0;
    for(let i = 0; i < s.length; i++){
      if(s[i] === t[k]){
        k++;
        count++;
        if(k > t.length)break;
      }
    }
    return t.length - count;
};