/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    for(let i = min; i <= max; i++){
        if(!nums.includes(i))return i
    }
    return min === 1 ? 0 : nums.length
};