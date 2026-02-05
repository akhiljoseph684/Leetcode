/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  let output = [];
    for(let i = 0; i < nums.length; i++){
      let k = i;
      for(let j = 0; j < Math.abs(nums[i]); j++){
        if(nums[i] < 0){
          if(k === 0){
            k = nums.length - 1
          }else{
            k--;
          }
        }else{
          if(k === nums.length - 1){
            k = 0;
          }else{
            k++;
          }
        }
      }
      output.push(nums[k])
    }
    return output;
};