/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let greatest = -Infinity;
    let arr = []
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && nums[j] % 2 === 0)count++;
        }
        if(greatest < count && count !== 0){
            greatest = count;
            arr = []
            arr.push(nums[i])
        }else  if(greatest === count)arr.push(nums[i])
    }
    return arr.length !== 0 ? Math.min(...arr) : -1
};