/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  let output = []
  let arr = [...new Set([...nums1, ...nums2, ...nums3])]
  for(let i = 0; i < arr.length; i++){
    let num = 0;
    if(nums1.includes(arr[i]))num++;
    if(nums2.includes(arr[i]))num++;
    if(nums3.includes(arr[i]))num++;
    if(num > 1)output.push(arr[i])
  }
  return output
  };