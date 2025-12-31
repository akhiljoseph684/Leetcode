/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr = [...score];
    arr.sort((a, b) => b - a);
    let output = [];
    for(let i = 0; i < score.length; i++){
        let index = score.findIndex(x => x === arr[i])
        switch(i){
            case 0: output[index] = 'Gold Medal';break;
            case 1: output[index] = 'Silver Medal';break;
            case 2: output[index] = 'Bronze Medal';break;
            default: output[index] = String(i + 1)
        }
    }
    return output;
};