/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let check = true
    for(let i = 1; i <= num / 2; i++){
        if(i * i === num) return true;
        else check = false;
    }
    if(!check) return false
    else return true;
};