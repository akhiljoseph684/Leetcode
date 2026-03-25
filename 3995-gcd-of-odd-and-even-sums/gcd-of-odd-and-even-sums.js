/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
  if(n === 1)return n
  let odd = 0;
  let even = 0;
  let value = 0;
    for(let i = 1; i < n * 2; i+=2){
      odd += i;
      even += i + 1;
    }
    for(let i = 1; i < odd; i++){
      if(odd % i === 0 && even % i === 0){
        value = i
      }
    }
    return value;
};