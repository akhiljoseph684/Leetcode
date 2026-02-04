/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let arr = []
    for(let i = 1; i <= num; i++){
      let str = String(i);
      let n = 0;
      for(let j = 0; j < str.length; j++){
        n += Number(str[j])
      }
      if(n % 2 === 0){
        arr.push(i)
      }
    }
    return arr.length;
};