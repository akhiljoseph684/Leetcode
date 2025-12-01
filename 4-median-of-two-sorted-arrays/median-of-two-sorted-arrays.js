/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2]
    nums.sort((a, b) => a - b)
    let num = nums.length / 2
    if(num % 1 === 0){
        return (nums[num - 1] + nums[num]) / 2
    }else{
        return nums[parseInt(num)]
    }
};