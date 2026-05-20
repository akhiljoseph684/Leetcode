/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  let arr = [];
    for(let i = 0; i < A.length; i++){
      let a = A.slice(0, i + 1);
      let count = 0;
      for(let j = 0; j < a.length; j++){
        if(a.includes(B[j]))count++;
      }
      arr.push(count)
    }
    return arr;
};