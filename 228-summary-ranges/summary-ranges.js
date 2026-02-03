/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = nums[0];
  let arr = []
  for(let i = 0; i < nums.length; i++){
    if(nums[i + 1] - nums[i] === 1){
      
    }else{
      if(start === nums[i]){
        arr.push(`${start}`)
      }else{
        arr.push(`${start}->${nums[i]}`)
      }
      start = nums[i + 1]
    }
  }
  return arr
};