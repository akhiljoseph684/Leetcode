/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  let n1 = start;
  let n2 = start;
  let a = 0;
  let b = 0;
  let k = 0;
    while(true){
      if(nums[n1] === target){
        return a;
      }else{
        if(n1 < nums.length){
          n1++;
          a++;
        }
      }
      if(nums[n2] === target){
        return b
      }else{
        if(n2 >= 0){
          n2--;
          b++;
        }
      }
      if(k > nums.length){
        return -1
      }
    }
};