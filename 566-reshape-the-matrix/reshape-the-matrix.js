/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let a = mat.flat()
    if(a.length !== r * c)return mat
    let output = [];
    let k = 0;
    for(let i = 0; i < r; i++){
      let arr = [];
      for(let j = 0; j < c; j++){
        arr.push(a[k])
        k++;
      }
      output.push(arr)
    }
    return output;
};