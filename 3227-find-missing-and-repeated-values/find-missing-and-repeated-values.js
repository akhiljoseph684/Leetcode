/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    grid = grid.flat(Infinity)
    let arr = []
    for(let i = 0; i <= grid.length; i++){
        for(let j = i + 1; j < grid.length; j++){
            if(grid[i] === grid[j]){
                arr.push(grid[i])
                grid.splice(i,1)
                break;
            }
        }
    }
    grid = grid.sort((a, b) => a - b)
    let j = 0;
    for(let i = 1; i <= Math.max(...grid) + 1; i++){
        if(grid[j] !== i){
            arr.push(i)
            break;
        }
        j++;
    }
    return arr;
};