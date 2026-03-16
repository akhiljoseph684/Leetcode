/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let arr = [];
    for(let i = 0; i < nums1.length; i++){
      let nums = nums2.find(x => x[0] === nums1[i][0]);
      let num = nums1[i][1];
      if(nums)num += nums[1]
      arr.push([nums1[i][0], num])
    }
    for(let i = 0; i < nums2.length; i++){
      let index = nums1.findIndex(x => x[0] === nums2[i][0]);
      if(index < 0){
        arr.push(nums2[i]);
      }
    }
    return arr.sort((a, b) => a[0] - b[0]);
};