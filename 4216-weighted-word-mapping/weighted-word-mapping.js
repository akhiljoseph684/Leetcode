/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
  let str = "";
  for(let i = 0; i < words.length; i++){
    let num = 0;
    for(let j = 0; j < words[i].length; j++){
      num += weights[words[i].charCodeAt(j) - 97];
    }
    let n = num % 26;
    str += String.fromCharCode(122 - n)
  }
  return str;
};