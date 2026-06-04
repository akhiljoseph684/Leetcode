/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
  let num1 = 0;
  let num2 = 0;
    for(let i = 0; i < num.length; i++){
      if(i % 2 == 0){
        num1 += Number(num[i])
      }else{
        num2 += Number(num[i])
      }
    }
    return num1 === num2
};