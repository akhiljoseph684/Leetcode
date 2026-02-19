/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    let integer =  obj[s[s.length - 1]]
    for(let i = s.length - 1; i > 0; i--){
      if(obj[s[i]] <= obj[s[i - 1]]){
        integer += obj[s[i - 1]]
      }else{
        integer -= obj[s[i - 1]]
      }
    }
    return integer;
};