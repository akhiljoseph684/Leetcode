/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  let arr = [];
    nums.sort((a, b) => a - b);
    for(let i = nums[0] + 1; i < nums[nums.length - 1]; i++){
      if(!nums.includes(i)){
        arr.push(i)
      }
    }
    return arr;
};