/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let a = [...matrix]
    for(let i = 0; i < a.length; i++){
      let arr = [];
      for(let j = a[0].length - 1; j >= 0; j--){
        arr.push(a[j][i])
      }
      matrix.shift()
      matrix.push(arr)
    }
};