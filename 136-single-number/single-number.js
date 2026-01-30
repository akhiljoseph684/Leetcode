/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for(let i = 0; i < nums.length; i++){
    let firstIndex = nums.findIndex(x => x === nums[i]);
    let lastIndex = nums.findLastIndex(x => x === nums[i]);
    if(firstIndex === lastIndex){
      return nums[i]
    }
  }
};