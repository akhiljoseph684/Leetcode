/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = nums.toSorted((a, b) => a - b);
    let output = [];
    for(let i = 0; i < nums.length; i++){
      output.push(arr.findIndex(x => x === nums[i]))
    }
    return output;
};