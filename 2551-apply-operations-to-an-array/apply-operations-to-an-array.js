/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
      let arr1 = []
      let arr2 = []
    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] === nums[i + 1]){
        nums[i] *= 2;
        nums[i + 1] = 0
      }
    }
    for(let i = 0; i < nums.length; i++){
      if(nums[i]){
        arr1.push(nums[i])
      }else{
        arr2.push(nums[i])
      }
    }
    return [...arr1, ...arr2];
};