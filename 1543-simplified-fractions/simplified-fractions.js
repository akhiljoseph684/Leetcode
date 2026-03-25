/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  let arr = []
  let ar = []
    for(let i = 1; i < n; i++){
      for(let j = 2; j <= n; j++){
        if(!ar.includes(j/i) && j > i){
          ar.push(j/i)
          arr.push(`${i}/${j}`)
        }
        
      }
    }
    return arr;
};