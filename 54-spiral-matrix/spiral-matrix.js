/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let arr = [];
    for(let i = 0; left <= right && top <= bottom; i++){
      for(let j = left; j <= right; j++){
        if(arr.length === matrix.flat().length)return arr
        arr.push(matrix[top][j])
      }
      top++;
      for(let j = top; j <= bottom; j++){
        if(arr.length === matrix.flat().length)return arr
        arr.push(matrix[j][right])
      }
      right--;
      for(let j = right; j >= left; j--){
        if(arr.length === matrix.flat().length)return arr
        arr.push(matrix[bottom][j])
      }
      bottom--;
      for(let j = bottom; j >= top; j--){
        if(arr.length === matrix.flat().length)return arr
        arr.push(matrix[j][left])
      }
      left++;
    }
    return arr;
};