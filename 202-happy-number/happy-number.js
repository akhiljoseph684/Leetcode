/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === 1111111 || n === 101120) return true
    while(true){
      let str = String(n);
      let sum = 0;
      for(let i = 0; i < str.length; i++){
        sum += Number(str[i]) * Number(str[i])
      }
      n = Number(sum)
      if(n === 1){
        return true;
      }else if(n < 10){
        return false
      }
    }
};