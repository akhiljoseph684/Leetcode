/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let num = 0;
  let output = '';
  let i = 0;
    while(true){
      let str = s.slice(num, num + k)
      console.log(str)
      if(i % 2 === 0){
        output += str.split('').reverse().join('')
      }else{
        output += str;
      }
      num += k;
      if(num > s.length){
        return output;
      }
      i++
    }
    return output;
};