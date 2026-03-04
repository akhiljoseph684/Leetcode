/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  let output = [];
    for(let i = 0; i < grid.length - 2; i++){
        output[i] = []
      for(let j = 0; j < grid[i].length - 2; j++){
        let arr = []
        arr.push(grid[i][j], grid[i][j + 1], grid[i][j + 2])
        arr.push(grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2])
        arr.push(grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2])
        output[i].push(Math.max(...arr))
        
      }
    }
    return output;
};