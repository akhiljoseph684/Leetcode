/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    function isSort(nums){
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i + 1])return false
        }
        return true;
    }
    for(let i = 0; i < nums.length; i++){
        let num = nums.pop();
        nums.unshift(num);
        if(isSort(nums))return true
    }
    return false;
};