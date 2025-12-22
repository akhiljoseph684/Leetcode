/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  let i = 0;
  let prev = null
    while(nums.length > 1){
      if(i === 0){
        prev = nums[0] + nums[1];
        nums.splice(0, 2)
      }else{
        if(prev !== nums[0] + nums[1])return i;
        else{
          prev = nums[0] + nums[1];
          nums.splice(0, 2)
        }
      }
      i++;  
    }
    return i
};