/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  let output = []
    for(let i = 0; i < nums.length; i++){
      let arr = []
      for(let j = i; j < nums.length; j++){
        if(arr.includes(nums[j]) && !output.includes(nums[j])){
          output.push(nums[j])
          break;
        }
        arr.push(nums[i])
      }
    }
    return output;
};