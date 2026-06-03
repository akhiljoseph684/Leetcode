/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let output = [];
    for(let i = 0; i < nums.length; i++){
      let j = 0;
      while(output[j] && output[j]?.includes(nums[i])){
        j++;
      }
      output[j] = (output[j] || []);
      output[j].push(nums[i]);
    }
    return output;
};