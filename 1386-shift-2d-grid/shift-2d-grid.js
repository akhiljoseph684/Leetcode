/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat();
    let output =[]
    for(let i = 0; i < k; i++){
      let lastNum = arr.pop()
      arr.unshift(lastNum)
    }
    let b = 0;
    for(let i = 0; i < grid.length; i++){
      let a = []
      for(let j = 0; j < grid[i].length; j++){
        a.push(arr[b])
        b++
      }
      output.push(a)
    }
    return output
};