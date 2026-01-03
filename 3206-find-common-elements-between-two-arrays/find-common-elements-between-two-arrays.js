/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  let len = 0;
  let count1 = 0;
  let count2 = 0;
  if(nums1.length > nums2.length)len = nums1.length;
  else len = nums2.length
  let arr = [];
  let output = [];
    for(let i = 0; i < nums1.length; i++){
      let num = nums1[i];
      if(!arr.includes(num)){
        if(nums2.includes(num)){
          for(let j = 0; j < len; j++){
            if(nums1[j] === num)count1++;
            if(nums2[j] === num)count2++;
          }
        }
        arr.push(num)
      }
    }
    return [count1, count2]
};