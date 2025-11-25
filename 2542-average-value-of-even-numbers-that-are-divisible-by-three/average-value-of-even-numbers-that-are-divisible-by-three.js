
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0 && nums[i] % 3 === 0){
            sum += nums[i]
            count++
        }
    }
    if(sum > 0){
        return parseInt(sum / count)
    }else{
        return 0;
    }
};
console.log(averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51]))
