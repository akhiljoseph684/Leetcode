/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let arr = [];
  let num1 = 0;
  let num2 = s.length;
    for(let i = 0; i < s.length; i++){
      if(s[i] === "I"){
        arr.push(num1);
        num1++;
      }else{
        arr.push(num2);
        num2--;
      }
    }
    arr.push(num1);
    return arr;
};