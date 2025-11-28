/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let i = 0;
    let arr =  []
    while(i < nums.length){
        let freq = nums[i]
        let val  = nums[i + 1]
        for(let i = 0; i < freq; i++){
            arr.push(val)
        }
        i += 2
    }
    return arr;
};