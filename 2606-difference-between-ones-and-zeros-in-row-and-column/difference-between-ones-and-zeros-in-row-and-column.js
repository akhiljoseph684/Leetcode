/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let obj = {};
    let output = [];
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        obj[i + "-i"] = (obj[i + "-i"] || 0) + grid[i][j];
        obj[j + "-j"] = (obj[j + "-j"] || 0) + grid[i][j];
        if(!grid[i][j]){
          obj[i + "-i-0"] = (obj[i + "-i-0"] || 0) + 1;
          obj[j + "-j-0"] = (obj[j + "-j-0"] || 0) + 1;
        }
      }
    }
    for(let i = 0; i < grid.length; i++){
      let arr = [];
      for(let j = 0; j < grid[i].length; j++){
        let num = obj[i + "-i"]
        num += obj[j + "-j"]
        num -= obj[i + "-i-0"] ? obj[i + "-i-0"] : 0
        num -=obj[j + "-j-0"] ? obj[j + "-j-0"] : 0
        arr.push(num)
      }
      output.push(arr);
    }
    return output
};