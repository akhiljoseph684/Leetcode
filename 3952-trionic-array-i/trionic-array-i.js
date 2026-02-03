/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
  let inc = [true, false, true];
  let j = 0;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i + 1])return false;
      if(inc[j]){
        if(nums[i] >= nums[i + 1]){
          if(i === 0)return false
          j++;
          if(j >= inc.length)return false
        }
      }else{
        if(nums[i] < nums[i + 1]){
          j++;
          if(j >= inc.length)return false
        }
      }
    }
    if(j < 2)return false
    return true;
};