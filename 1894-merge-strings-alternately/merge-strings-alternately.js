/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let length = word1.length > word2.length ? word1.length : word2.length;
    let str = '';
    for(let i = 0; i < length; i++){
      if(i < word1.length){
        str += word1[i]
      }
      if(i < word2.length){
        str += word2[i]
      }
    }
    return str;
};