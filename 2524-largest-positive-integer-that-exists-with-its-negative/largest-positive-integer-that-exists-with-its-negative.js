/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let check = true;
    while(check){
        let max = Math.max(...nums);
        if(max  > 0){
            nums.splice(nums.findIndex(x => x === max),1)
            max = max -= (max * 2)
            if(nums.includes(max))return Math.abs(max)
        }else return -1  
    }   
};