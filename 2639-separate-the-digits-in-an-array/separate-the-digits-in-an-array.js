/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    nums = nums.join('')
    nums = nums.split('')
    return nums.map(x => Number(x))
};