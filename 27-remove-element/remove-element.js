/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i] !== val){
            nums.push(nums[i])
            count++;
        }
    }
    for(let i = 0; i < len; i++){
        nums.shift()
    }
    return count;
};