/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let arr = num.toString().split('').sort((a, b) => a - b);
    let nums1 = '';
    let nums2 = '';
    for(let i = 0; i < arr.length; i++){
      if(i % 2 === 0){
        nums1 += arr[i]
      }
      else{
        nums2 += arr[i]
      }
    }
    return Number(nums1) + Number(nums2)
};