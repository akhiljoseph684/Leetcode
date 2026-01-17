/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr = []
    for(let i = left; i <= right; i++){
      let str = String(i)
      let check = true;
      for(let j = 0; j < str.length; j++){
        if(i % Number(str[j]) !== 0){
          check = false;
          break;
        }
      }
      if(check){
        arr.push(i)
      }
    }
    return arr
};