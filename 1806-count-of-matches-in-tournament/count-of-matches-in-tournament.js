/**
 * @param {number} n
 * @return {number}
 */
let matches = 0;
var numberOfMatches = function(n,check=false) {
    if(!check)matches = 0
    if(n === 1)return matches;
    let num = n / 2;
    if(num % 1 ===  0){
        matches += num;
        numberOfMatches(num,true)
    }else{
        matches += parseInt(num)
        numberOfMatches(parseInt(num) + 1,true)
    }
    return matches
};