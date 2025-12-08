/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => b - a)
    let i = 1;
    let sum = 0;
    while(i < nums.length){
      sum += nums[i]
      i += 2;
    }
    return sum
};