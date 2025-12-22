/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  if(nums.length === 1)return nums[0]
    while(true){
      nums = nums.map((x, i, arr) => {
        if(i === arr.length - 1){
          return 0;
        }
        let num = x + arr[i + 1]
        return num % 10;
      })
      nums.pop()
      if(nums.length === 1)return nums[0]
    }
};