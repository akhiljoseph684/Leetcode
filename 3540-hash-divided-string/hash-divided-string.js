/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  alpha = alpha.split('')
  let sum = 0;
  let i = 0;
  let output = []
    while(i < s.length){
      for(let j = i; j < k + i; j++){
        let index = alpha.indexOf(s[j])
        sum += index
      }
      output.push(alpha[sum % 26])
      sum = 0;
      i += k
    }
    return output.join('')
};