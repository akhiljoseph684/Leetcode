/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let n = mat.length
  let sum = 0;
    for(let i = 0; i < n; i++){
      if(i !== n - 1 - i){
        sum += mat[i][i] + mat[i][n - 1 - i];
      }else{
        sum += mat[i][i]
      }
    }
    return sum
};