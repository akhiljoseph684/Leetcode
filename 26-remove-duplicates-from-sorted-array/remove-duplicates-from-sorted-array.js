/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let arr1 = [];
  let arr2 = [];
  let num = 0;
  for(let i = 0; i < nums.length; i++){
    arr2.push("_")
    if(!arr1.includes(nums[i])){
      num++;
      arr1.push(nums[i])
    }
  }
  let len = nums.length
  for(let i = 0; i < len; i++){
    nums.pop()
  }
  nums.push(...arr1, ...arr2)
  return num
};