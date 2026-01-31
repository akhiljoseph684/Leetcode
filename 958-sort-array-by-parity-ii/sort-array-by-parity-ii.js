/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let even =  [];
  let odd = [];
  let output = [];
    for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0){
        even.push(nums[i])
      }else{
        odd.push(nums[[i]])
      }
    }
    for(let i = 0; i < even.length; i++){
        output.push(even[i])
        output.push(odd[i])
    }
    return output;
};