/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = []
    let output = []
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            arr.push(matrix[j][i])
        }
        output.push(arr)
        arr = []
    }
    return output;
};