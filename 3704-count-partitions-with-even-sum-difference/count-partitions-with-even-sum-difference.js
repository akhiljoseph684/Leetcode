/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  let count = 0;
    for(let i = 0; i < nums.length - 1; i++){
      let num1 = 0;
      let num2= 0;
      for(let j = 0;  j < nums.length; j++){
        if(j <= i){
          num1 += nums[j]
        }else{
          num2 += nums[j]
        }
      }
      if(Math.abs(num1 - num2) % 2 == 0)count++;
    }
    return count;
};