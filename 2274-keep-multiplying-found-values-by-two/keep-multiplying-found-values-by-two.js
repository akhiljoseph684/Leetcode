/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let value = original;
    for(let i = 0; i < nums.length; i++){
        if(nums.includes(value)) value *= 2
    }
    return value
};