/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = []
    let arr = []
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < i + 1; j++){
            if(j === 0 || j === i){
                arr.push(1)
            }else{
                arr.push(output[i - 1][j] + output[i - 1][j - 1])
            }
        }
        output.push(arr)
        arr = []
    }
    return output;
};