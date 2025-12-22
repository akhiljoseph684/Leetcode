/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  let sum = 0;
  let arr = [];
  let a = []
  while(grid[0].length){
    for(let i = 0; i < grid.length; i++){
      let max = Math.max(...grid[i])
      let remove = grid[i].splice(grid[i].lastIndexOf(max), 1);
      a.push(remove)
    }
    arr.push(Math.max(...a))
    a = [];
  }
  return arr.reduce((acc , curr) => acc + curr, 0)
};