/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
  let num1 = -1;
  let num2 = -1;
    function isPrime(n){
      if(n <= 1)return false;
      if(n === 2)return true;
      if(n % 2 === 0)return false;
      for(let i = 3; i < n / 2; i+=2){
        if(n % i === 0)return false;
      }
      return true;
    }
    for(let i = 0; i < nums.length; i++){
      if(num1 >= 0){
        if(isPrime(nums[i])){
          num2 = i;

        }
      }else{
        if(isPrime(nums[i])){
          num1 = i
        }
      }
    }
    return num1 < 0 || num2 < 0 ? 0 : num2 - num1;
};