/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  let num = 1;
  let k = true;
    for(let i = 0; i < time; i++){
      if(num === 1)k = true;
      if(num === n)k = false
      if(k){
        num++;
      }else num--;
      console.log(num)
    }
    return num;
};