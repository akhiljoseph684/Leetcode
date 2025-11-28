/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let arr1 = []
    let arr2 = []
    let ans = []
    let sum1 = 0;
    let sum2 = 0;
    let j = nums.length - 1
    for(let i = 0; i < nums.length; i++){
        if(i === 0){
            arr1[i] = i
            arr2[j] = i
        }else{
            sum1 += nums[i - 1]
            sum2 += nums[j + 1]
            arr1[i] = sum1;
            arr2 [j] = sum2;
        }
        j--;
    }
    for(let i = 0; i < nums.length; i++){
        let num = arr1[i] - arr2[i]
        num = Math.abs(num)
        ans.push(num)
    }
    return ans;
};