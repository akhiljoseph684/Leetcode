/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  let output = [];
  let str = '';
  let j = 0;
  for(let i = 1; i <= s.length; i++){
    str += s[i - 1]
    j++;
    if(i % k === 0){
      output.push(str)
      j = 0;
      str =  ''
    }
  }
  if(str){
    for(let i = 0; i < k - j; i++){
      str += fill;
    }
    output.push(str)
  }
    return output
};