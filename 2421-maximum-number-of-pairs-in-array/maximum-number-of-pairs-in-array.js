/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && i !== j){
                nums.splice(j,1)
                nums.splice(i,1)
                count++;
                i = -1
                break;
            }
        }
    }
    return [count, nums.length]
};