/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let greatest =  0;
    let num = 1;
    for(let i = 0; i < nums.length; i++){
        let count = 1;
        for(let j =  i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
        if(count > greatest){
            greatest = count;
            num = 0
        }    
        if(greatest === count)num++;
    }
    return greatest * num
};