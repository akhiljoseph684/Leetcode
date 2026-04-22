/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let num = nums[0];
    let sum = num;
    for(let i = 1; i < nums.length; i++){
      if(nums[i] - nums[i - 1] === 1){
        sum += nums[i];
      }else{
        break;
      }
    }
    while(nums.includes(sum)){
      sum++;
    }
    return sum
};