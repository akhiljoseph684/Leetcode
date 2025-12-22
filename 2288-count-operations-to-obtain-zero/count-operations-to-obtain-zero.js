/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let i = 0;
    while(true){
      if(num1 < 1 || num2 <  1)return 0;
      i++;
      if(num1 > num2){
        num1 -= num2
      }else if(num1 < num2){
        num2 -= num1
      }else{
        num1 -= num2
      }
      if(num1 < 1 || num2 < 1){
        return i;
      }
    }
};