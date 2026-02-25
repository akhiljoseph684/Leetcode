/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = [];
    let neg = [];
    let arr = [];
    let j = 0;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] >= 0){
        pos.push(nums[i])
      }else{
        neg.push(nums[i])
      }
    }
    for(let i = 0; i < nums.length; i++){
      arr.push(i % 2 === 0 ? pos[j] : neg[j])
      if(i % 2 === 1)j++;
    }
    return arr;
};