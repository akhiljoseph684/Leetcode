/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
      let arr = [];
    for(let i = 0; i < grid.length; i++){
      if(i % 2 === 0){
        for(let j = 0; j < grid[i].length; j++){
          if(j % 2 == 0)arr.push(grid[i][j])
        }
      }else{
        for(let j = grid[i].length - 1; j >= 0; j--){
          if(j % 2 == 1)arr.push(grid[i][j])
        }
      }
    }
    return arr;
};