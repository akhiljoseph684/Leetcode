/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let obj = {};
    let diff = Infinity;
    for(let i = 0; i < arr.length - 1; i++){
      let d = arr[i + 1] - arr[i];
      if(d < diff){
        diff = d;
      }
      obj[d] = (obj[d] || [])
      obj[d].push([arr[i], arr[i + 1]])
    }
    return obj[diff]
};