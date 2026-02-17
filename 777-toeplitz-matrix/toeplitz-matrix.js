/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let i = matrix.length - 2; i >= 0; i--){
      let num = matrix[i][0]
      let shortLen = matrix.length - i > matrix[i].length ? matrix[i].length : matrix.length - i;
      for(let j = 1; j < shortLen; j++){
        if(num !== matrix[i + j][j]){
          return false;
        }
      }
    }
    for(let i = 1; i < matrix[0].length; i++){
      let num = matrix[0][i]
      let shortLen = matrix.length > matrix[0].length - i ? matrix[0].length - i : matrix.length;
      for(let j = 1; j < shortLen; j++){
        if(num !== matrix[j][j + i]){
          return false;
        }
      }
    }
    return true;
};