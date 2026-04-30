/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let dummy = structuredClone(matrix);
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length;j++){
        if(dummy[i][j] === 0){
          let len;
          if(matrix.length > matrix[i].length){
            len = matrix.length;
          }else{
            len = matrix[i].length;
          }
          for(let k = 0; k < len; k++){
            if(k < matrix.length){
              matrix[k][j] = 0;
            }
            if(k < matrix[i].length){
              matrix[i][k] = 0;
            }
          }
        }
      }
    }
    return matrix;
};