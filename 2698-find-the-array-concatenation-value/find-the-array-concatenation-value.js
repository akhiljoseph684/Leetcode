/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let output = 0;
    while(nums.length){
      if(nums.length === 1){
        output += nums[0]
        nums.pop()
      }else{
        let str = nums[0] + '' + nums[nums.length - 1]
        output += Number(str)
        nums.shift()
        nums.pop()
      }
    }
    return output;
};