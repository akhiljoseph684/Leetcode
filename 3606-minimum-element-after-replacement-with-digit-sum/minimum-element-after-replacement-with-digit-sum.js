/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
  let greatest = Infinity;
    for(let i = 0; i < nums.length; i++){
      let str = String(nums[i]);
      let sum = 0;
      for(let j = 0; j < str.length; j++){
        sum += Number(str[j]);
      }
      if(sum < greatest){
        greatest = sum;
      }
    }
    return greatest
};