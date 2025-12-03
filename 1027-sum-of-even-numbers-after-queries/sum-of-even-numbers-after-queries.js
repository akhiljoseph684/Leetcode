/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let arr = []
    let sum = 0;
    for(let i = 0; i < queries.length; i++){
        nums[queries[i][1]] += queries[i][0] 
        for(let j = 0; j < nums.length; j++){
            if(nums[j] % 2 === 0){
                sum += nums[j]
            }
        }
        arr.push(sum)
        sum = 0;
    }
    return arr;
};