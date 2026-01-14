/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let output = [];
    let k = 0;
    if(m * n !== original.length){
      return output;
    }
    for(let i = 0; i < m; i++){
      let arr = [];
      for(let j = 0; j < n; j++){
        arr.push(original[k])
        k++;
      }
      output.push(arr)
    }
    return output;
};