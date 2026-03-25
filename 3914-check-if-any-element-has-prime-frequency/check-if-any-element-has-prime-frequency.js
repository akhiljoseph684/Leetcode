/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    function isPrime(n){
      if(n <= 1)return false;
      if(n === 2)return true;
      if(n % 2 === 0)return false;
      for(let i = 3; i < n / 2; i+=2){
        if(n % i === 0)return false;
      }
      return true;
    }
    let obj = {};
    for(let i = 0; i < nums.length; i++){
      obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    }
    for(let key in obj){
      if(isPrime(obj[key]))return true;
    }
    return false;
};