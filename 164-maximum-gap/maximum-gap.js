/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let gap = 0;
    let greatest = 0;
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length - 1; i++){
        gap = nums[i + 1] - nums[i]
        if(gap > greatest){
            greatest = gap;
        }
    }
    return greatest
};