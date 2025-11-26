/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let value = 0;
    let index = nums.findIndex(n => n === target)
    if(index >= 0){
        return index;
    }
    for(let i = 0; i < nums.length; i++){
        if(target < nums[i]){
            return i;
        }
    }
    return nums.length
    
};