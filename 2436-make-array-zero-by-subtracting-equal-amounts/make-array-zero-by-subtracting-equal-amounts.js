/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    nums = nums.filter(x => x !== 0)
    if(!nums.length){
      return 0;
    }
    let count = 0;
    while(true){
      let min = Math.min(...nums)
      nums = nums.map(x => x - min)
      nums = nums.filter(x => x !== 0)
      count++;
      if(!nums.length){
        return count;
      }
    }
};