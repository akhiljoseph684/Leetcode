/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let arr = []
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length - i - 1; j++){
        if(nums[j] < nums[j + 1]){
          temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
    for(let i = 0; i < nums.length; i++){
      if(!arr.includes(nums[i]))arr.push(nums[i]);
      if(arr.length === 3)return arr[2]
    }
    return arr[0]
};