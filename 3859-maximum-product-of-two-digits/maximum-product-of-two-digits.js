/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arr = String(n).split('')
    let num = 0;
    let output = 0;
    for(let j = 1; j < arr.length; j++){
      for(let i = 0; i < arr.length - j; i++){
        let num = Number(arr[i]) * Number(arr[i + j])
        if(output < num){
          output = num;
        }
      }
    }
    
    return output;
};