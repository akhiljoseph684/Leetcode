/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  let i = 1;
  let limit = 1;
  let arr = []
    while(10){
      if(i % 2 === 1 && i !== 1){
        limit++;
      }
      for(let j = 0; j < limit; j++){
        if(rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols){
          arr.push([rStart, cStart])
        }
        if(i % 4 === 1){
          cStart++;
        }
        if(i % 4 === 2){
          rStart++;
        }
        if(i % 4 === 3){
          cStart--;
        }
        if(i % 4 === 0){
          rStart--;
        }
      }
      if(cols * rows === arr.length)return arr
      i++;
    }
};