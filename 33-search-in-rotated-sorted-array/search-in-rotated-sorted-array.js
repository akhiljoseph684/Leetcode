/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let i = 0; i <= nums.length / 2; i++){
      if(nums[i] === target)return i;
      if(nums[nums.length - i] === target)return nums.length - i;
    }
    return -1;
};