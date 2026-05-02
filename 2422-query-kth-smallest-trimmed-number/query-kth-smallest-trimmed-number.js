/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
  let output = [];
    for(let i = 0; i < queries.length; i++){
      let arr = nums.map((num, index) => {
        return{
          num: num.slice(-queries[i][1]),
          index
        }
      })
      arr.sort((a, b) => {
        if(a.num > b.num)return 1;
        if(a.num < b.num)return -1;
        return a.index - b.index
      })
      output.push(arr[queries[i][0] - 1].index);
    }
    return output;
};