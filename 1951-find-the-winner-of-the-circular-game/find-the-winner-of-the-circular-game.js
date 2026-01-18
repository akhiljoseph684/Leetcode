/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    if(n === 1 && k === 1)return 1
  let count = 0;
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  let i = 0;
  let j = 1;
  while(true){
    if(j === k){
      arr.splice(i, 1)
      j = 0;
    }else i++;
    j++;
    if(arr.length === 1){
      return arr[0]
    }
    if(i > arr.length - 1)i = 0;
  }
};