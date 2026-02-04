/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = Array(n);
    let k = 1;
    for(let i = 0; i < n; i++){
      matrix[i] = []
    }
    let left = 0;
    let top = 0;
    let right = n - 1;
    let bottom = n - 1;
    let arr = [];
    let output = [];
    for(let i = 0; left <= right && top <= bottom; i++){
      for(let j = left; j <= right; j++){
        if(matrix.flat().length === n * n)return matrix
        matrix[top][j] = k;
        k++;
      }
      top++;
      for(let j = top; j <= bottom; j++){
        if(matrix.flat().length === n * n)return matrix
        matrix[j][right] =  k;
        k++;
      }
      right--;
      for(let j = right; j >= left; j--){
        if(matrix.flat().length === n * n)return matrix
        matrix[bottom][j] = k;
        k++;
      }
      bottom--;
      for(let j = bottom; j >= top; j--){
        if(matrix.flat().length === n * n)return matrix
        matrix[j][left] = k;
        k++;
      }
      left++;
    }
    return matrix;
};