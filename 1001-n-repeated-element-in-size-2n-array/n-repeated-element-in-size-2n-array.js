/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let greatest = 0;
    let num;
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j])count++
        }
        if(count > greatest){
            num = nums[i]
            greatest = count
        }
    }
    if(!greatest)num = nums[0]
    return num
};