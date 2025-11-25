/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let num = nums.concat(nums)
    return num
};
getConcatenation([1,2,1])